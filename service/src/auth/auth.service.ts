import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as argon from 'argon2';
import { SignInDto, SignInWeixinDto, SignUpDto } from './dto';
import { UserService } from 'src/user/user.service';
import { HttpService } from '@nestjs/axios';
import { Platform } from '@prisma/client';
import { map, lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly userService: UserService,
    private readonly httpService: HttpService,
  ) {}

  async signUp(dto: SignUpDto) {
    const hash = await argon.hash(dto.password);

    try {
      const user = await this.userService.create({
        ...dto,
        password: hash,
      });

      return {
        user,
        token: await this.signToken(user.id, user.platform),
      };
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ForbiddenException('用户已注册');
      }
      throw error;
    }
  }

  async signIn(dto: SignInDto) {
    const user = await this.userService.findOneByEmail(dto.email);

    if (!user) {
      throw new ForbiddenException('凭证不正确');
    } else {
      const pwMatches = await argon.verify(user.password, dto.password);
      if (!pwMatches) {
        throw new ForbiddenException('凭证不正确');
      } else {
        delete user.password;

        return {
          user,
          token: await this.signToken(user.id, user.platform),
        };
      }
    }
  }

  async signInWeixin(dto: SignInWeixinDto) {
    const req = this.httpService
      .get('https://api.weixin.qq.com/sns/jscode2session', {
        params: {
          appid: process.env.WEIXIN_APP_ID,
          secret: process.env.WEIXIN_APP_SECRET,
          js_code: dto.code,
          grant_type: 'authorization_code',
        },
      })
      .pipe(map((res) => res.data));

    const { openid, session_key } = await lastValueFrom(req);

    let user = await this.userService.findOneByOpenid(openid);
    if (!user) {
      user = await this.userService.create({
        openid,
        platform: Platform.WEI_XIN,
      });
    }

    return {
      user,
      token: await this.signToken(user.id, user.platform),
    };
  }

  async signInAndAutoSignUp(dto: SignInDto) {
    const user = await this.userService.findOneByEmail(dto.email);

    if (!user) {
      return this.signUp(dto);
    } else {
      return this.signIn(dto);
    }
  }

  async signToken(id: number, platform: string) {
    const payload = {
      sub: id,
      platform,
    };

    const token = await this.jwtService.signAsync(payload, {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: '1h',
    });

    return `Bearer ${token}`;
  }
}

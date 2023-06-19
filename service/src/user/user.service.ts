import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, CreateUserWeixinDto, EditUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  create(dto: CreateUserDto | CreateUserWeixinDto) {
    return this.prismaService.user.create({
      data: dto,
    });
  }

  getByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }

  getByOpenid(openid: string) {
    return this.prismaService.user.findUnique({
      where: {
        openid,
      },
    });
  }

  async editById(userId: number, dto: EditUserDto) {
    const user = await this.prismaService.user.update({
      where: {
        userId,
      },
      data: dto,
    });

    delete user.password;

    return user;
  }
}

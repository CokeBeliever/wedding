import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, CreateUserWeixinDto, UpdateUserDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(dto: CreateUserDto | CreateUserWeixinDto) {
    const user = await this.prismaService.user.create({
      data: dto,
    });

    delete user.password;

    return user;
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: { id },
    });
  }

  findOneByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: { email },
    });
  }

  findOneByOpenid(openid: string) {
    return this.prismaService.user.findUnique({
      where: { openid },
    });
  }

  async update(id: number, dto: UpdateUserDto) {
    const user = await this.prismaService.user.update({
      where: { id },
      data: dto,
    });

    delete user.password;

    return user;
  }

  async remove(id: number) {
    try {
      const data = await this.prismaService.user.delete({
        where: {
          id,
        },
      });

      return data;
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('不存在条数据');
      }
      throw error;
    }
  }
}

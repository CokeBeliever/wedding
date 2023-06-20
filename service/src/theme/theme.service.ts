import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateThemeDto, UpdateThemeDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class ThemeService {
  constructor(private prismaService: PrismaService) {}

  create(dto: CreateThemeDto) {
    return this.prismaService.theme.create({
      data: dto,
    });
  }

  findAll() {
    return this.prismaService.theme.findMany();
  }

  findOne(id: number) {
    return this.prismaService.theme.findUnique({
      where: { id },
    });
  }

  update(id: number, dto: UpdateThemeDto) {
    return this.prismaService.theme.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    try {
      const data = await this.prismaService.theme.delete({
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

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateThemeDto, EditThemeDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class ThemeService {
  constructor(private prismaService: PrismaService) {}

  getById(themeId: number) {
    return this.prismaService.theme.findUnique({
      where: {
        themeId,
      },
    });
  }

  getAll() {
    return this.prismaService.theme.findMany();
  }

  create(dto: CreateThemeDto) {
    return this.prismaService.theme.create({
      data: dto,
    });
  }

  editById(themeId: number, dto: EditThemeDto) {
    return this.prismaService.theme.update({
      where: {
        themeId,
      },
      data: dto,
    });
  }

  async deleteById(themeId: number) {
    try {
      const data = await this.prismaService.theme.delete({
        where: {
          themeId,
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

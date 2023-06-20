import { Injectable } from '@nestjs/common';
import { CreateWeddingDto, UpdateWeddingDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WeddingService {
  constructor(private readonly prismaService: PrismaService) {}

  create(dto: CreateWeddingDto) {
    return this.prismaService.wedding.create({
      data: dto,
    });
  }

  findAll() {
    return this.prismaService.wedding.findMany();
  }

  findOne(id: number) {
    return this.prismaService.wedding.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, dto: UpdateWeddingDto) {
    return this.prismaService.wedding.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prismaService.wedding.delete({
      where: { id },
    });
  }
}

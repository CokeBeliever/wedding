import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWeddingMessageDto } from './dto';

@Injectable()
export class WeddingMessageService {
  constructor(private prismaService: PrismaService) {}

  create(dto: CreateWeddingMessageDto) {
    return this.prismaService.weddingMessage.create({
      data: dto,
    });
  }

  getByWeddingId(weddingId: number) {
    return this.prismaService.weddingMessage.findMany({
      where: {
        weddingId,
      },
      include: {
        user: {
          select: {
            username: true,
            phoneNumber: true,
            email: true,
          },
        },
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMessageDto } from './dto';

@Injectable()
export class MessageService {
  constructor(private prismaService: PrismaService) {}

  createMessage(dto: CreateMessageDto) {
    return this.prismaService.weddingMessage.create({
      data: dto,
    });
  }

  getAllMessageByWeddingId(weddingId: number) {
    return this.prismaService.weddingMessage.findMany({
      where: {
        weddingId,
      },
    });
  }
}

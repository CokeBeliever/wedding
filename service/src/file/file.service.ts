import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FileService {
  constructor(private prismaService: PrismaService) {}

  create(file: Express.Multer.File) {
    const { originalname, size, mimetype, filename, destination, path } = file;

    return this.prismaService.file.create({
      data: { originalname, size, mimetype, filename, destination, path },
    });
  }
}

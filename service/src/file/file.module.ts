import { Module, UnprocessableEntityException } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: process.env.FILE_UPLOAD_PATH,
        filename: (req, file, cb) => {
          return cb(null, `${uuidv4()}${extname(file.originalname)}`);
        },
      }),
      fileFilter(req, file, cb) {
        const { mimetype } = file;
        if (
          /^image\/(jpe?g|png|gif|bmp|webp)$/.test(mimetype) ||
          /^audio\/(mpeg|mp3|ogg|wav|flac)$/.test(mimetype)
        ) {
          cb(null, true);
        } else {
          cb(new UnprocessableEntityException('无法处理文件类型'), false);
        }
      },
    }),
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}

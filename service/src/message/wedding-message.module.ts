import { Module } from '@nestjs/common';
import { WeddingMessageService } from './wedding-message.service';
import { WeddingMessageController } from './wedding-message.controller';

@Module({
  providers: [WeddingMessageService],
  controllers: [WeddingMessageController],
})
export class WeddingMessageModule {}

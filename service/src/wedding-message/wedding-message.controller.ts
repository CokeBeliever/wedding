import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Get,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { WeddingMessageService } from './wedding-message.service';
import { CreateWeddingMessageDto } from './dto';

@Controller('wedding-message')
export class WeddingMessageController {
  constructor(private weddingMessageService: WeddingMessageService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  createMessage(@Body() dto: CreateWeddingMessageDto) {
    return this.weddingMessageService.create(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('by-wedding-id/:weddingId')
  getAllMessageByWeddingId(@Param('weddingId', ParseIntPipe) weddingId: number) {
    return this.weddingMessageService.getByWeddingId(weddingId);
  }
}

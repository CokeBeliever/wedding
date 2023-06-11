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
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto';

@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @HttpCode(HttpStatus.OK)
  @Post('postMessage')
  createMessage(@Body() dto: CreateMessageDto) {
    return this.messageService.createMessage(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('getMessageByWeddingId/:id')
  getAllMessageByWeddingId(@Param('id', ParseIntPipe) weddingId: number) {
    return this.messageService.getAllMessageByWeddingId(weddingId);
  }
}

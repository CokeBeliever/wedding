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
import { CreateWeddingMessageDto, WeddingMessageDto } from './dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('wedding-message')
@Controller('wedding-message')
export class WeddingMessageController {
  constructor(private weddingMessageService: WeddingMessageService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  @ApiBearerAuth()
  @ApiOperation({ summary: '创建一条记录' })
  create(@Body() dto: CreateWeddingMessageDto) {
    return this.weddingMessageService.create(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('by-wedding-id/:weddingId')
  @ApiBearerAuth()
  @ApiOperation({ summary: '根据weddingId获取相关记录' })
  @ApiResponse({
    status: 200,
    type: [WeddingMessageDto],
  })
  getByWeddingId(@Param('weddingId', ParseIntPipe) weddingId: number) {
    return this.weddingMessageService.getByWeddingId(weddingId);
  }
}

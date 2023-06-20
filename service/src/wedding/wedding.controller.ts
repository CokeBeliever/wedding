import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WeddingService } from './wedding.service';
import { CreateWeddingDto, UpdateWeddingDto } from './dto';

@Controller('wedding')
export class WeddingController {
  constructor(private readonly weddingService: WeddingService) {}

  @Post()
  create(@Body() dto: CreateWeddingDto) {
    return this.weddingService.create(dto);
  }

  @Get()
  findAll() {
    return this.weddingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weddingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateWeddingDto) {
    return this.weddingService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weddingService.remove(+id);
  }
}

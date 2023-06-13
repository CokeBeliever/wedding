import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ThemeService } from './theme.service';
import { CreateThemeDto, EditThemeDto } from './dto';
import { Public } from 'src/auth/decorator';

@Controller('theme')
export class ThemeController {
  constructor(private themeService: ThemeService) {}

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.themeService.getById(id);
  }

  @Public()
  @Get()
  getAll() {
    return this.themeService.getAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateThemeDto) {
    return this.themeService.create(dto);
  }

  @Put(':id')
  editById(@Param('id', ParseIntPipe) id: number, @Body() dto: EditThemeDto) {
    return this.themeService.editById(id, dto);
  }

  @Delete(':id')
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.themeService.deleteById(id);
  }
}

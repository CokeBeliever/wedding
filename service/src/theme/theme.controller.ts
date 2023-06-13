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
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ThemeService } from './theme.service';
import { CreateThemeDto, EditThemeDto } from './dto';
import { Public } from 'src/auth/decorator';

@ApiTags('theme')
@Controller('theme')
export class ThemeController {
  constructor(private themeService: ThemeService) {}

  @Public()
  @Get(':id')
  @ApiOperation({ summary: '获取一条记录' })
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.themeService.getById(id);
  }

  @Public()
  @Get()
  @ApiOperation({ summary: '获取所有记录' })
  getAll() {
    return this.themeService.getAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBearerAuth()
  @ApiOperation({ summary: '创建一条记录' })
  create(@Body() dto: CreateThemeDto) {
    return this.themeService.create(dto);
  }

  @Put(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: '编辑一条记录' })
  editById(@Param('id', ParseIntPipe) id: number, @Body() dto: EditThemeDto) {
    return this.themeService.editById(id, dto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: '删除一条记录' })
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.themeService.deleteById(id);
  }
}

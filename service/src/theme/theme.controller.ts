import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ThemeService } from './theme.service';
import { CreateThemeDto, UpdateThemeDto } from './dto';
import { Public } from 'src/auth/decorator';

@ApiTags('theme')
@Controller('theme')
export class ThemeController {
  constructor(private readonly themeService: ThemeService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBearerAuth()
  @ApiOperation({ summary: '创建一条记录' })
  create(@Body() dto: CreateThemeDto) {
    return this.themeService.create(dto);
  }

  @Get()
  @Public()
  @ApiOperation({ summary: '获取所有记录' })
  findAll() {
    return this.themeService.findAll();
  }

  @Get(':id')
  @Public()
  @ApiOperation({ summary: '获取一条记录' })
  findOne(@Param('id') id: string) {
    return this.themeService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: '编辑一条记录' })
  update(@Param('id') id: string, @Body() dto: UpdateThemeDto) {
    return this.themeService.update(+id, dto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: '删除一条记录' })
  remove(@Param('id') id: string) {
    return this.themeService.remove(+id);
  }
}

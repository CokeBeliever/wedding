import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsObject, IsOptional, IsString } from 'class-validator';

export class EditThemeDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  description?: string;

  @IsObject()
  @IsOptional()
  @ApiProperty()
  content?: object;

  @IsInt()
  @IsOptional()
  @ApiProperty()
  coverImageId?: number;
}

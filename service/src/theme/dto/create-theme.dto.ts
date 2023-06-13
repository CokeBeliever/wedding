import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsObject, IsString } from 'class-validator';

export class CreateThemeDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsObject()
  @ApiProperty()
  content: object;

  @IsInt()
  @ApiProperty()
  coverImageId: number;
}

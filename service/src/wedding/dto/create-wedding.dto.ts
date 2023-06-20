import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsJSON } from 'class-validator';

export class CreateWeddingDto {
  @IsInt()
  @ApiProperty()
  themeId: number;

  @IsJSON()
  @ApiProperty()
  themeData: object;

  @IsInt()
  @ApiProperty()
  userId: number;
}

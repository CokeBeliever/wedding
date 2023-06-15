import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWeddingMessageDto {
  @IsNumber()
  @ApiProperty()
  weddingId: number;

  @IsNumber()
  @ApiProperty()
  userId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  content: string;
}

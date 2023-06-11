import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @IsNumber()
  weddingId: number;

  @IsNumber()
  userId: number;

  @IsString()
  @IsNotEmpty()
  content: string;
}

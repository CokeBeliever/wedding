import { IsInt, IsObject, IsString } from 'class-validator';

export class CreateThemeDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsObject()
  content: object;

  @IsInt()
  coverImageId: number;
}

import { IsInt, IsObject, IsOptional, IsString } from 'class-validator';

export class EditThemeDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsObject()
  @IsOptional()
  content?: object;

  @IsInt()
  @IsOptional()
  coverImageId?: number;
}

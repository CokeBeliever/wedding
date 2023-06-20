import { IsInt, IsJSON } from 'class-validator';

export class CreateWeddingDto {
  @IsInt()
  themeId: number;

  @IsJSON()
  themeData: object;

  @IsInt()
  userId: number;
}

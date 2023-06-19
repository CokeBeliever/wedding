import { IsString } from 'class-validator';

export class SignInWeixinDto {
  @IsString()
  code: string;
}

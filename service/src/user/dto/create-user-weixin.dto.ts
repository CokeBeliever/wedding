import { Platform } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateUserWeixinDto {
  @IsString()
  openid: string;

  @IsEnum(Platform)
  platform: Platform;

  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;
}

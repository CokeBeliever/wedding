import { ApiProperty } from '@nestjs/swagger';
import { Platform } from '@prisma/client';
import { IsEnum, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserWeixinDto {
  @IsString()
  @ApiProperty()
  openid: string;

  @IsEnum(Platform)
  @ApiProperty()
  platform: Platform;

  @IsString()
  @IsOptional()
  @ApiProperty()
  username?: string;

  @IsPhoneNumber('CN')
  @IsOptional()
  @ApiProperty()
  phoneNumber?: string;
}

import { PartialType } from '@nestjs/swagger';
import { CreateUserWeixinDto } from './create-user-weixin.dto';

export class UpdateUserWeixinDto extends PartialType(CreateUserWeixinDto) {}

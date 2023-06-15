import { ApiProperty } from '@nestjs/swagger';

export class WeddingMessageDto {
  @ApiProperty({ description: '婚柬唯一标识' })
  weddingId: number;

  @ApiProperty({ description: '用户唯一标识' })
  userId: number;

  @ApiProperty({ description: '婚柬留言' })
  content: string;

  @ApiProperty({ description: '婚柬留言唯一标识' })
  widdingMessageId: number;

  @ApiProperty({ description: '创建时间' })
  createdAt: string;

  @ApiProperty({ description: '更新时间' })
  updatedAt: string;
}

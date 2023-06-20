import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { WeddingMessageModule } from './wedding-message/wedding-message.module';
import { JwtGuard } from './auth/guard';
import { FileModule } from './file/file.module';
import { ThemeModule } from './theme/theme.module';
import { WeddingModule } from './wedding/wedding.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    FileModule,
    WeddingMessageModule,
    ThemeModule,
    WeddingModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
  ],
})
export class AppModule {}

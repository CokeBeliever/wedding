import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SignInDto, SignInWeixinDto, SignUpDto } from './dto';
import { AuthService } from './auth.service';
import { Public } from './decorator';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() dto: SignUpDto) {
    return this.authService.signUp(dto);
  }

  @Post('sign-in')
  @HttpCode(HttpStatus.OK)
  signIn(@Body() dto: SignInDto) {
    return this.authService.signIn(dto);
  }

  @Post('sign-in-weixin')
  @HttpCode(HttpStatus.OK)
  signInWeixin(@Body() dto: SignInWeixinDto) {
    return this.authService.signInWeixin(dto);
  }

  @Post('sign-in-and-auto-sign-up')
  signInAndAutoSignUp(@Body() dto: SignInDto) {
    return this.authService.signInAndAutoSignUp(dto);
  }
}

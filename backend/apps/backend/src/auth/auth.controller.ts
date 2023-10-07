import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerDto';
import { Request, Response } from 'express';
import { LoginDto } from './dto/loginDto';
import { SendCodeDto } from './dto/sendCodeDto';

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("/register")
  async register(@Body() registerDto: RegisterDto, @Res({ passthrough: true }) res: Response) {
    const response = await this.authService.register(registerDto, res);
    return response;
  }

  @Post("/login")
  async login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response) {
    const response = await this.authService.login(loginDto, res);
    return response;
  }

  @Post("/logout")
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const refreshToken = req.headers.cookie.split("=")[1];

    const response = await this.authService.logout({ refreshToken }, res);
    return response;
  }

  @Get("/refresh")
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const refreshToken = req.headers.cookie.split("=")[1];

    const response = await this.authService.refresh({ refreshToken }, res);
    return response;
  }

  @Get("/sendVerificationCode")
  async sendVerificationCode(@Body() sendCodeDto: SendCodeDto) {
    const response = await this.authService.sendVerificationCode(sendCodeDto);
    return response;
  }
}

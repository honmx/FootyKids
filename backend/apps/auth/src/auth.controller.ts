import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';
import { RegisterDto } from './dto/registerDto';
import { LoginDto } from './dto/loginDto';
import { LogoutDto } from './dto/logoutDto';
import { RefreshDto } from './dto/refreshDto';
import { SendCodeDto } from './dto/sendCodeDto';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly rmqService: RmqService,
  ) { }

  @MessagePattern("register")
  async register(@Payload() dto: RegisterDto, @Ctx() context: RmqContext) {
    const response = await this.authService.register(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("login")
  async login(@Payload() dto: LoginDto, @Ctx() context: RmqContext) {
    const response = await this.authService.login(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("logout")
  async logout(@Payload() dto: LogoutDto, @Ctx() context: RmqContext) {
    const response = await this.authService.logout(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("refresh")
  async refresh(@Payload() dto: RefreshDto, @Ctx() context: RmqContext) {
    const response = await this.authService.refresh(dto);
    this.rmqService.ack(context);
    return response;
  }

  @MessagePattern("send-verification-code")
  async sendVerificationCode(@Payload() dto: SendCodeDto, @Ctx() context: RmqContext) {
    const response = await this.authService.sendVerificationCode(dto);
    this.rmqService.ack(context);
    return response;
  }

  
}
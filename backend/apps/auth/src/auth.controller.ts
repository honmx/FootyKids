import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';
import { RegisterDto } from './dto/registerDto';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly rmqService: RmqService,
  ) { }

  @MessagePattern("register")
  register(@Payload() dto: RegisterDto, @Ctx() context: RmqContext) {
    const response = this.authService.register(dto);
    this.rmqService.ack(context);
    return response;
  }
}

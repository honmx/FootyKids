import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { RegisterDto } from './dto/registerDto';

@Injectable()
export class AuthService {
  constructor(
    @Inject("AUTH") private authClient: ClientProxy
  ) {}

  async register(registerDto: RegisterDto) {
    const response = await lastValueFrom(this.authClient.send("register", registerDto));
    return response;
  }
}

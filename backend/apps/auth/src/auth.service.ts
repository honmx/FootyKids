import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/registerDto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject("USERS") private usersClient: ClientProxy
  ) { }

  async register(dto: RegisterDto) {
    const user = await lastValueFrom(this.usersClient.send("check-email-existance", { email: dto.email }));

    if (user) {
      return new HttpException("This user already exists", HttpStatus.BAD_REQUEST);
    }

    return user;
  }
}

import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { RegisterDto } from './dto/registerDto';
import { Response } from 'express';
import { LoginDto } from './dto/loginDto';
import { LogoutDto } from './dto/logoutDto';
import { RefreshDto } from './dto/refreshDto';
import { SendCodeDto } from './dto/sendCodeDto';

@Injectable()
export class AuthService {
  constructor(
    @Inject("AUTH") private authClient: ClientProxy
  ) { }

  async register(registerDto: RegisterDto, res: Response) {
    const response = await lastValueFrom(this.authClient.send("register", registerDto));

    if (response?.status >= 400 || !response) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    res.cookie("refreshToken", response.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
    return response;
  }

  async login(loginDto: LoginDto, res: Response) {
    const response = await lastValueFrom(this.authClient.send("login", loginDto));

    if (response?.status >= 400 || !response) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    res.cookie("refreshToken", response.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
    return response;
  }
  
  async logout(logoutDto: LogoutDto, res: Response) {
    const response = await lastValueFrom(this.authClient.send("logout", logoutDto));
    
    if (response?.status >= 400 || !response) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }
    
    res.clearCookie("refreshToken");
    return response;
  }
  
  async refresh(refreshDto: RefreshDto, res: Response) {
    const response = await lastValueFrom(this.authClient.send("refresh", refreshDto));

    if (response?.status >= 400 || !response) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    res.cookie("refreshToken", response.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });

    return response;
  }

  async sendVerificationCode(sendCodeDto: SendCodeDto) {
    const response = await lastValueFrom(this.authClient.send("send-verification-code", sendCodeDto));

    if (response?.status >= 400 || !response) {
      throw new HttpException(response?.message || "Some error", response?.status || HttpStatus.BAD_REQUEST);
    }

    return response;
  }
}

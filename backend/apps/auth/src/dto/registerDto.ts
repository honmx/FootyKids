import { IsString, IsEmail } from "class-validator";

export class RegisterDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
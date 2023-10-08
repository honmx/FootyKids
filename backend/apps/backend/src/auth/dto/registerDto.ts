import { IsEmail, IsString, Length } from "class-validator";

export class RegisterDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Length(8)
  password: string;
}
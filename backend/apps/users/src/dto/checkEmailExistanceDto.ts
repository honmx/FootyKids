import { IsEmail, IsString } from "class-validator";

export class checkEmailExistanceDto {
  @IsString()
  @IsEmail()
  email: string;
}
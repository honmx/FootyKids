import { IsEmail, IsNumber, IsString } from "class-validator";

export class ChangeGroupDto {
  @IsNumber()
  id: number;

  @IsNumber()
  groupId: number;
}
import { IsNumber } from "class-validator";

export class ChangeGroupDto {
  @IsNumber()
  groupId: number;
}
import { IsArray, IsString } from "class-validator";

export class CreateGroupDto { 
  @IsString()
  name: string;
  
  @IsArray()
  participantsId: number[];
}
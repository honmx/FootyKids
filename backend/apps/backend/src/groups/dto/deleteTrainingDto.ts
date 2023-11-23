import { IsNumber, IsString } from "class-validator";

export class DeleteTrainingDto { 
  @IsString()
  date: string;
}
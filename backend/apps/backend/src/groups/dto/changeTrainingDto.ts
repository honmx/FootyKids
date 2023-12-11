import { IsNumber, IsString } from "class-validator";

export class ChangeTrainingDto { 
  @IsString()
  date: string;
  
  @IsString()
  time: string;

  @IsNumber()
  placeId: number;
}
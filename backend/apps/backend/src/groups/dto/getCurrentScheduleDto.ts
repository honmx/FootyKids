import { IsNumber, IsString } from "class-validator";

export class GetCurrentScheduleDto { 
  @IsNumber()
  month: number;
  
  @IsNumber()
  year: number;
}
import { IsArray, IsNumber, IsString } from "class-validator";

export class MarkAttendanceDto {
  @IsNumber()
  id: number;
  
  @IsString()
  date: string;

  @IsArray()
  attendanceData: {
    userId: number;
    attendance: "П" | "УП" | "НП" | "Б";
  }[];
}
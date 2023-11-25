import { ISchedule } from "./ISchedule";
import { IUser } from "./IUser";

export interface IGroup {
  id: number;
  name: string;
  participants: IUser[],
  schedule: ISchedule[],
}
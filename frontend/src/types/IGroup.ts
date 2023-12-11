import { ISchedule } from "./ISchedule";
import { IChild } from "./IChild";

export interface IGroup {
  id: number;
  name: string;
  participants: IChild[],
  schedule: ISchedule[],
}
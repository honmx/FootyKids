import { ITrainingByDay } from "./ITrainingByDay";

export interface IHistoryItem {
  id: number;
  attendance: "П" | "УП" | "НП" | "Б";
  training: ITrainingByDay;
}
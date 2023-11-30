import { ITrainingByDay } from "./ITrainingByDay";

export type ChangedTrainingType = Pick<ITrainingByDay, "date" | "time" | "place">;
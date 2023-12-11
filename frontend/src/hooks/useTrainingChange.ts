import { DateContext } from "@/contexts/dateContext";
import { ChangedTrainingType } from "@/types/IChangedTraining";
import { IPlace } from "@/types/IPlace";
import { ITrainingByDay } from "@/types/ITrainingByDay";
import { useContext, useState } from "react";

export const useTrainingChange = (training: ChangedTrainingType) => {

  const { monthIndex, year } = useContext(DateContext);

  const [changedTraining, setChangedTraining] = useState<ChangedTrainingType>(training);

  const handleChangeTraining = (date: number, time: string, placeId: number) => {
    setChangedTraining({
      ...training,
      date: `${date < 10 ? `0${date}` : date}.${monthIndex + 1}.${year}`,
      time,
      place: { id: placeId } as IPlace
    });
  }

  return { changedTraining, handleChangeTraining };
}
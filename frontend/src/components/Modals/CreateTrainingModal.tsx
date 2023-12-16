import { IModalProps } from "@/types/IModalProps";
import { FC, useContext, useEffect, useState } from "react";
import ModalWrapper from "../Wrappers/ModalWrapper";
import { Button, Stack, Typography } from "@mui/material";
import TrainingByDayItem from "../Items/TrainingByDayItem";
import { ITrainingByDay } from "@/types/ITrainingByDay";
import { IPlace } from "@/types/IPlace";
import { useTrainingChange } from "@/hooks/useTrainingChange";
import { useTrainingRequest } from "@/hooks/useTrainingRequest";
import groupsService from "@/services/groupsService";
import { GroupContext } from "@/contexts/groupContext";
import { useRequest } from "@/hooks/useRequest";
import placesService from "@/services/placesService";

interface Props extends IModalProps {
  date: string;
}

const CreateTrainingModal: FC<Props> = ({ open, handleCloseClick, date }) => {

  const { group } = useContext(GroupContext);

  const [error, setError] = useState<string>("");

  const { data: places, isLoading, error: placesError } = useRequest(() => placesService.getPlaces(), []);

  const training = {
    date,
    time: "18:00",
    place: { id: 1 } as IPlace,
  };

  const { changedTraining, handleChangeTraining } = useTrainingChange(training);

  const { makeRequest } = useTrainingRequest({
    initialTraining: training,
    changedTraining,
    handleErrorChange: (message: string) => setError(message),
    requestFn: () => groupsService.createTraining(group.id, changedTraining.date, changedTraining.time, changedTraining.place.id),
    handleCloseClick
  });

  useEffect(() => {
    handleChangeTraining(Number(training.date.slice(0, 2)), training.time, training.place.id);
    setError("");
  }, [open]);

  return (
    <ModalWrapper open={open} handleCloseClick={handleCloseClick}>
      <Stack spacing={3} sx={{ padding: 2 }}>
        <Typography fontSize={28}>Создание тренировки</Typography>
        <TrainingByDayItem
          training={changedTraining}
          onChangeTraining={handleChangeTraining}
          places={places}
        />
        {
          error && <Typography color="error">{error}</Typography>
        }
        <Button onClick={makeRequest}>Создать</Button>
      </Stack>
    </ModalWrapper>
  )
};

export default CreateTrainingModal;
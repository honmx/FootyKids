import { FC, useContext, useEffect, useState } from "react";
import ModalWrapper from "../Wrappers/ModalWrapper";
import { IModalProps } from "@/types/IModalProps";
import { Box, Button, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { getCurrentCalendarDates } from "@/helpers/getCurrentCalendarDates";
import { DateContext } from "@/contexts/dateContext";
import { ITrainingByDay } from "@/types/ITrainingByDay";
import TrainingByDayItem from "../Items/TrainingByDayItem";
import { usePlaces } from "@/hooks/usePlaces";
import groupsService from "@/services/groupsService";
import { GroupContext } from "@/contexts/groupContext";
import { IPlace } from "@/types/IPlace";

interface Props extends IModalProps {
  training: ITrainingByDay;
}

const ChangeTrainingModal: FC<Props> = ({ open, handleCloseClick, training }) => {

  const { group, setGroup } = useContext(GroupContext);
  const { year, monthIndex } = useContext(DateContext);

  const [changedTraining, setChangedTraining] = useState<ITrainingByDay>(training);
  const [error, setError] = useState<string>("");

  const places = usePlaces();

  const currentSchedule = group.schedule.find(schedule => schedule.date === `${monthIndex + 1}.${year}`);

  useEffect(() => {
    setChangedTraining(training);
    setError("");
  }, [open]);

  const handleChangeTraining = (date: number, time: string, placeId: number) => {
    setChangedTraining({
      ...training,
      date: `${date < 10 ? `0${date}` : date}.${monthIndex + 1}.${year}`,
      time,
      place: { id: placeId } as IPlace
    });
  }

  const handleChangeTrainingRequest = async () => {
    if (training.date !== changedTraining.date && currentSchedule?.trainingsByDay.find(trainingByDay => changedTraining.date === trainingByDay.date)) {
      setError("У вас уже есть тренировка в эту дату");
      return;
    }

    const newSchedule = await groupsService.changeTraining(
      group.id,
      training.id,
      `${changedTraining.date}`,
      changedTraining.time,
      changedTraining.place.id
    );

    if (newSchedule) {
      setGroup({ ...group, schedule: newSchedule });
    }

    handleCloseClick();
  }

  return (
    <ModalWrapper open={open} handleCloseClick={handleCloseClick}>
      <Stack spacing={3} sx={{ padding: 2 }}>
        <Typography fontSize={28}>Изменение тренировки</Typography>
        <Box>
          <TrainingByDayItem
            training={changedTraining}
            onChangeTraining={handleChangeTraining}
            places={places}
          />
          {
            error && <Typography color="error">{error}</Typography>
          }
        </Box>
        <Button onClick={handleChangeTrainingRequest}>Применить</Button>
      </Stack>
    </ModalWrapper>
  )
};

export default ChangeTrainingModal;
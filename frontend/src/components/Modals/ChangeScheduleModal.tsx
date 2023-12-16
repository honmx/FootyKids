import { FC, useContext, useEffect, useState } from "react";
import ModalWrapper from "../Wrappers/ModalWrapper";
import { IModalProps } from "@/types/IModalProps";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import smallPlusIcon from "@/assets/small plus icon.svg";
import { GroupContext } from "@/contexts/groupContext";
import { ITrainingByDayOfTheWeek } from "@/types/ITrainingByDayOfTheWeek";
import { DateContext } from "@/contexts/dateContext";
import TrainingByDayOfTheWeekItem from "../Items/TrainingByDayOfTheWeekItem";
import { IPlace } from "@/types/IPlace";
import placesService from "@/services/placesService";
import groupsService from "@/services/groupsService";
import { useRequest } from "@/hooks/useRequest";

interface Props extends IModalProps {

}

const ChangeScheduleModal: FC<Props> = ({ open, handleCloseClick }) => {

  const { group, setGroup } = useContext(GroupContext);
  const { year, monthIndex } = useContext(DateContext);

  const currentSchedule = group.schedule.find(schedule => schedule.date === `${monthIndex + 1}.${year}`);

  const [trainings, setTrainings] = useState<ITrainingByDayOfTheWeek[]>(currentSchedule?.trainingsByDayOfTheWeek.sort((a, b) =>
    (a.dayOfTheWeek === 0 ? 7 : a.dayOfTheWeek) - (b.dayOfTheWeek === 0 ? 7 : b.dayOfTheWeek)
  ) || []);

  const [error, setError] = useState<string>("");

  const { data: places, isLoading, error: placesError } = useRequest(() => placesService.getPlaces(), []);

  useEffect(() => {
    setTrainings(currentSchedule?.trainingsByDayOfTheWeek.sort((a, b) =>
      (a.dayOfTheWeek === 0 ? 7 : a.dayOfTheWeek) - (b.dayOfTheWeek === 0 ? 7 : b.dayOfTheWeek)
    ) || []);
    setError("");
  }, [year, monthIndex, open]);

  const handleCreateTrainingClick = () => {
    setTrainings([
      { id: Math.floor(Math.random() * 10000000), dayOfTheWeek: 1, time: "18:00", place: { id: 1 } as IPlace } as ITrainingByDayOfTheWeek,
      ...trainings
    ]);
  }

  const handleChangeTraining = (trainingId: number, dayOfTheWeek: number, time: string, placeId: number) => {
    setTrainings(trainings.map(training => training.id === trainingId
      ? { id: trainingId, dayOfTheWeek, time, place: { id: placeId } } as ITrainingByDayOfTheWeek
      : training
    ));
  }

  const handleDeleteTrainingClick = (id: number) => {
    setTrainings(trainings.filter(training => training.id !== id));
  }

  const handleCreateSchedule = async () => {
    if (Array.from(new Set(trainings.map(training => training.dayOfTheWeek))).length !== trainings.length) {
      setError("Дни тренировок должны быть уникальны");
      return;
    }

    const newSchedule = await groupsService.createSchedule(
      group.id,
      `${monthIndex + 1}.${year}`,
      trainings.map(({ dayOfTheWeek, time, place }) => ({ dayOfTheWeek, time, placeId: place.id }))
    );

    if (newSchedule) {
      setGroup({ ...group, schedule: newSchedule });
    }

    handleCloseClick();
  }

  if (isLoading) {}

  return (
    <ModalWrapper open={open} handleCloseClick={handleCloseClick}>
      <Stack spacing={3} sx={{ padding: 2 }}>
        <Stack spacing={5} direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-end" }}>
          <Typography fontSize={28}>Изменение расписания</Typography>
          <Button onClick={handleCreateTrainingClick} sx={{ paddingTop: 0.75, paddingBottom: 0.75 }}>
            <Image src={smallPlusIcon} alt="plus icon" width={10} height={10} style={{ marginRight: 5 }} />
            Создать
          </Button>
        </Stack>
        <Box>
          {
            trainings.map((training, i) => (
              <TrainingByDayOfTheWeekItem
                key={training.id}
                training={training}
                places={places}
                onChangeTraining={handleChangeTraining}
                onDeleteTrainingClick={handleDeleteTrainingClick}
                sx={{ borderBottom: i !== trainings.length - 1 ? "1px solid #DDD" : 0 }}
              />
            ))
          }
          {
            error && <Typography color="error">{error}</Typography>
          }
        </Box>
        <Button onClick={handleCreateSchedule}>Применить</Button>
      </Stack>
    </ModalWrapper>
  )
};

export default ChangeScheduleModal;
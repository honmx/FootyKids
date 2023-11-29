import { IModalProps } from "@/types/IModalProps";
import { FC, useContext } from "react";
import ModalWrapper from "../Wrappers/ModalWrapper";
import { Button, Stack, Typography } from "@mui/material";
import { ITrainingByDay } from "@/types/ITrainingByDay";
import CalendarGridCell from "../UI/CalendarGridCell";
import groupsService from "@/services/groupsService";
import { GroupContext } from "@/contexts/groupContext";

interface Props extends IModalProps {
  training: ITrainingByDay;
}

const DeleteTrainingModal: FC<Props> = ({ open, handleCloseClick, training }) => {

  const { group, setGroup } = useContext(GroupContext);

  const handleDeleteTrainingClick = async () => {
    const newSchedule = await groupsService.deleteTraining(group.id, training.date);

    if (newSchedule) {
      setGroup({ ...group, schedule: newSchedule });
    }

    handleCloseClick();
  }

  return (
    <ModalWrapper open={open} handleCloseClick={handleCloseClick}>
      <Stack spacing={3} sx={{ padding: 2 }}>
        <Typography fontSize={26}>Удаление тренировки</Typography>
        <Button onClick={handleDeleteTrainingClick}>Подтвердить</Button>
      </Stack>
    </ModalWrapper>
  )
};

export default DeleteTrainingModal;
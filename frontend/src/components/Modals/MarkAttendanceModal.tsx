import { FC } from "react";
import ModalWrapper from "../Wrappers/ModalWrapper";
import { IModalProps } from "@/types/IModalProps";
import { Stack, Typography } from "@mui/material";
import { ITrainingByDay } from "@/types/ITrainingByDay";

interface Props extends IModalProps {
  training: ITrainingByDay;
}

const MarkAttendanceModal: FC<Props> = ({ open, handleCloseClick, training }) => {
  return (
    <ModalWrapper open={open} handleCloseClick={handleCloseClick}>
      <Stack spacing={3} sx={{ padding: 2 }}>
        <Typography fontSize={28}>Отметить детей</Typography>
        <Typography>{training.date}, {training.time}, {training.place.name}</Typography>
      </Stack>
    </ModalWrapper>
  )
};

export default MarkAttendanceModal;
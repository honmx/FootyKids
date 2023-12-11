import { FC, useContext, useEffect, useState } from "react";
import ModalWrapper from "../Wrappers/ModalWrapper";
import { IModalProps } from "@/types/IModalProps";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ITrainingByDay } from "@/types/ITrainingByDay";
import { GroupContext } from "@/contexts/groupContext";
import UserMarkAttendanceItem from "../Items/UserMarkAttendanceItem";
import { IMarkAttendanceItem } from "@/types/IMarkAttendanceItem";
import { AttendanceType } from "@/types/AttendanceType";
import groupsService from "@/services/groupsService";
import { DateContext } from "@/contexts/dateContext";

interface Props extends IModalProps {
  training: ITrainingByDay;
}

const MarkAttendanceModal: FC<Props> = ({ open, handleCloseClick, training }) => {

  const { group } = useContext(GroupContext);

  const [markedUsers, setMarkedUsers] = useState<IMarkAttendanceItem[]>([]);

  useEffect(() => {
    setMarkedUsers([]);
  }, [open]);

  const handleMarkAttendanceItemChange = (id: number, attendance: AttendanceType) => {
    setMarkedUsers([...markedUsers.filter(user => user.userId !== id), { userId: id, attendance }]);
  }

  const handleMarkAttendanceClick = async () => {
    await groupsService.markAttendance(group.id, training.date, markedUsers);

    handleCloseClick();
  }

  return (
    <ModalWrapper open={open} handleCloseClick={handleCloseClick}>
      <Stack spacing={3} sx={{ padding: 2 }}>
        <Typography fontSize={28}>Отметить детей</Typography>
        <Typography>{training.date}, {training.time}, {training.place.name}</Typography>
        <Box>
          {
            group.participants
              .sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
              .map((participant, i) => (
                <UserMarkAttendanceItem
                  key={participant.id}
                  user={participant}
                  handleMarkAttendanceItemChange={handleMarkAttendanceItemChange}
                  sx={{ borderBottom: i < group.participants.length - 1 ? "1px solid #DDD" : 0 }}
                />
              ))
          }
        </Box>
        <Button onClick={handleMarkAttendanceClick}>Отметить</Button>
      </Stack>
    </ModalWrapper>
  )
};

export default MarkAttendanceModal;
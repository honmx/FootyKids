import { FC, useContext } from "react";
import ModalWrapper from "../Wrappers/ModalWrapper";
import { IModalProps } from "@/types/IModalProps";
import { Box, Button, Stack, Typography } from "@mui/material";
import { IChild } from "@/types/IChild";
import Image from "next/image";
import userPhoto from "@/assets/user.jpg";
import usersService from "@/services/usersService";
import { GroupContext } from "@/contexts/groupContext";

interface Props extends IModalProps {
  user: IChild;
}

const ExpelChildModal: FC<Props> = ({ open, handleCloseClick, user }) => {

  const { group, setGroup } = useContext(GroupContext);

  const handleExpelClick = async () => {
    const participants = await usersService.expelChild(user.id);

    if (participants) {
      setGroup({ ...group, participants });
    }

    handleCloseClick();
  }

  return (
    <ModalWrapper open={open} handleCloseClick={handleCloseClick}>
      <Stack spacing={3} sx={{ padding: 2 }}>
        <Typography fontSize={28}>Исключить</Typography>
        <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
          <Image src={user.photo || userPhoto} alt="user photo" width={60} height={60} style={{ aspectRatio: 1, objectFit: "cover" }} />
          <Box>
            <Typography>{user.name.split(" ").slice(0, 2).join(" ")}</Typography>
            <Typography>{user.birth}</Typography>
          </Box>
        </Stack>
        <Button onClick={handleExpelClick}>Исключить</Button>
      </Stack>
    </ModalWrapper>
  )
};

export default ExpelChildModal;
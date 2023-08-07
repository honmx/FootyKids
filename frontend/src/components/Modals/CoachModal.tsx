import { FC } from "react";
import Image from "next/image";
import { Box, ModalProps, Stack, Typography } from "@mui/material";
import ModalWrapper from "../Wrappers/ModalWrapper";
import { ICoach } from "@/types/ICoach";
import coachIcon from "@/assets/coach icon.svg";
import CoachInfo from "../CoachInfo";

interface Props extends Omit<ModalProps, "children"> {
  open: boolean;
  handleCloseClick: () => void;
  coach: ICoach;
}

const CoachModal: FC<Props> = ({ open, handleCloseClick, coach, ...restProps }) => {

  return (
    <ModalWrapper disablePortal open={open} handleCloseClick={handleCloseClick} {...restProps}>
      <Stack direction="row">
        <Box sx={{ width: "50%" }}>
          <CoachInfo coach={coach} sx={{ padding: 3, overflow: "auto" }} />
        </Box>
        <Box sx={{ width: "50%" }}>
          <Image
            src={coach?.photo ? coach.photo : coachIcon}
            alt="coach"
            width={1080}
            height={1920}
          />
        </Box>
      </Stack>
    </ModalWrapper>
  )
};

export default CoachModal;

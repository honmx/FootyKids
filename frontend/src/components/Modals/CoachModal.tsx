import { FC } from "react";
import Image from "next/image";
import { Box, ModalProps, Stack } from "@mui/material";
import ModalWrapper from "../Wrappers/ModalWrapper";
import { ICoach } from "@/types/ICoach";
import coachIcon from "@/assets/coach icon.svg";
import CoachInfo from "../CoachInfo";
import { IModalProps } from "@/types/IModalProps";
import ModalItemWithScrollingContentWrapper from "../Wrappers/ModalItemWithScrollingContentWrapper";

interface Props extends IModalProps {
  coach: ICoach;
}

const CoachModal: FC<Props> = ({ open, handleCloseClick, coach, ...restProps }) => {

  return (
    <ModalWrapper open={open} handleCloseClick={handleCloseClick} {...restProps}>
      <Stack direction="row">
        <ModalItemWithScrollingContentWrapper>
          <CoachInfo coach={coach} />
        </ModalItemWithScrollingContentWrapper>
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

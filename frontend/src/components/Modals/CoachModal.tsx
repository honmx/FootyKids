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
      <Stack direction={{
        smallPhone: "column-reverse",
        tablet: "row"
      }}>
        <ModalItemWithScrollingContentWrapper>
          <CoachInfo coach={coach} />
        </ModalItemWithScrollingContentWrapper>
        <Box
          sx={{
            width: {
              smallPhone: "100%",
              tablet: "50%"
            },
            maxWidth: {
              smallPhone: "400px",
              tablet: "100%"
            }
          }}
        >
          <Image
            src={coach?.photo ? coach.photo : coachIcon}
            alt="coach"
            width={1080}
            height={1920}
            style={{  }}
          />
        </Box>
      </Stack>
    </ModalWrapper>
  )
};

export default CoachModal;

import { FC } from "react";
import ModalWrapper from "../Wrappers/ModalWrapper";
import { IModalProps } from "@/types/IModalProps";
import { Typography } from "@mui/material";

interface Props extends IModalProps {

}

const ChangeTrainingModal: FC<Props> = ({ open, handleCloseClick }) => {
  return (
    <ModalWrapper open={open} handleCloseClick={handleCloseClick}>
      <Typography>change training</Typography>
    </ModalWrapper>
  )
};

export default ChangeTrainingModal;
import { IModalProps } from "@/types/IModalProps";
import { FC } from "react";
import ModalWrapper from "../Wrappers/ModalWrapper";
import { Typography } from "@mui/material";

interface Props extends IModalProps {

}

const CreateTrainingModal: FC<Props> = ({ open, handleCloseClick }) => {
  return (
    <ModalWrapper open={open} handleCloseClick={handleCloseClick}>
      <Typography>create training</Typography>
    </ModalWrapper>
  )
};

export default CreateTrainingModal;
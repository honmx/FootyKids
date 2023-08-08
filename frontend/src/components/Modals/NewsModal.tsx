import { FC } from "react";
import ModalWrapper from "../Wrappers/ModalWrapper";
import { IModalProps } from "@/types/IModalProps";
import { Typography } from "@mui/material";

interface Props extends IModalProps {
  
}

const NewsModal: FC<Props> = ({ open, handleCloseClick }) => {
  return (
    <ModalWrapper open={open} handleCloseClick={handleCloseClick}>
      <>
        <Typography>sfdgsdfg</Typography>
        <Typography>sfdgsdfg</Typography>
        <Typography>sfdgsdfg</Typography>
        <Typography>sfdgsdfg</Typography>
        <Typography>sfdgsdfg</Typography>
        <Typography>sfdgsdfg</Typography>
        <Typography>sfdgsdfg</Typography>
        <Typography>sfdgsdfg</Typography>
      </>
    </ModalWrapper>
  )
};

export default NewsModal;

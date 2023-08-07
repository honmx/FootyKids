import { FC } from "react";
import { Box, IconButton, Modal, ModalProps, Paper } from "@mui/material";
import crossIcon from "@/assets/cross icon.svg";
import Image from "next/image";

interface Props extends ModalProps {
  open: boolean,
  handleCloseClick: () => void;
}

const ModalWrapper: FC<Props> = ({ open, handleCloseClick, children, ...restProps }) => {

  return (
    <Modal
      open={open}
      onClose={handleCloseClick}
      sx={{ overflowY: "auto", paddingInline: 5 }}
      {...restProps}
    >
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}>
        <Box sx={{ position: "relative" }}>
          <Paper sx={{ maxWidth: "1000px", overflow: "hidden" }}>
            {children}
          </Paper>
          <IconButton onClick={handleCloseClick} sx={{
            position: "absolute",
            top: 0,
            right: "-40px",
            width: "40px"
          }}>
            <Image src={crossIcon} alt="cross icon" />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  )
};

export default ModalWrapper;

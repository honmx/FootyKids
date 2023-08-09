import { ModalProps } from "@mui/material";

export interface IModalProps extends Omit<ModalProps, "children">  {
  open: boolean;
  handleCloseClick: () => void;
}
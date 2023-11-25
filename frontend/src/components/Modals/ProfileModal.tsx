import { IModalProps } from "@/types/IModalProps";
import { IUser } from "@/types/IUser";
import { FC } from "react";
import ModalWrapper from "../Wrappers/ModalWrapper";
import ModalContentDirectionDeterminant from "../Wrappers/ModalContentDirectionDeterminant";
import defaultUserPhoto from "@/assets/user.jpg";
import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import ModalItemHeightDeterminantWrapper from "../Wrappers/ModalItemHeightDeterminantWrapper";

interface Props extends IModalProps {
  user: IUser;
}

const ProfileModal: FC<Props> = ({ open, handleCloseClick, user }) => {
  return (
    <ModalWrapper open={open} handleCloseClick={handleCloseClick} edit={true} handleEditClick={() => { }}>

      <ModalContentDirectionDeterminant>
        <ModalItemHeightDeterminantWrapper>
          <Image src={user.photo || defaultUserPhoto} alt="user photo" />
        </ModalItemHeightDeterminantWrapper>
        <ModalItemHeightDeterminantWrapper>
          <Box sx={{ padding: 2 }}>
            <Typography>{user.name}</Typography>
          </Box>
        </ModalItemHeightDeterminantWrapper>
      </ModalContentDirectionDeterminant>
    </ModalWrapper>
  )
};

export default ProfileModal;
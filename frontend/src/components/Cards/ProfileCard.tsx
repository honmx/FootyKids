import { FC, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import defaultUserPhoto from "@/assets/user.jpg";
import { IUser } from "@/types/UserType";
import { createPortal } from "react-dom";
import ProfileModal from "../Modals/ProfileModal";

interface Props {
  user: IUser;
}

const ProfileCard: FC<Props> = ({ user }) => {

  const [isModalActive, setIsModalActive] = useState(false);

  const handleOpenModalClick = () => {
    setIsModalActive(prev => !prev);
  }

  return (
    <>
      <Paper
        sx={{
          height: "100%",
          transition: "all 0.15s ease",
          cursor: "pointer",
          "&:hover": { backgroundColor: "#F5F5F5" }
        }}
        onClick={handleOpenModalClick}
      >
        <Image src={user.photo || defaultUserPhoto} alt="user photo" style={{ aspectRatio: 1, objectFit: "cover" }} />
        <Box sx={{ padding: 2 }}>
          <Typography>{user.name}</Typography>
        </Box>
      </Paper>
      {
        typeof document !== "undefined" &&
        createPortal(
          <ProfileModal open={isModalActive} handleCloseClick={handleOpenModalClick} user={user} />,
          document.body.querySelector("#modal-container") as Element
        )
      }
    </>
  )
};

export default ProfileCard;
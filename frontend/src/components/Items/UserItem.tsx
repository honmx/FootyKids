import { FC, useState } from "react";
import { IChild } from "@/types/IChild";
import { Box, BoxProps, Grid, IconButton, ListItemButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import userPhoto from "@/assets/user.jpg";
import menuDropdownIcon from "@/assets/menu dropdown icon.svg";
import { UserType } from "@/types/UserType";
import { getDateFromString } from "@/helpers/getDateFromString";
import { incline } from "@/helpers/incline";
import Dropdown from "../UI/Dropdown";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useHover } from "@/hooks/useHover";
import { createPortal } from "react-dom";
import ExpelChildModal from "../Modals/ExpelChildModal";

interface Props extends BoxProps {
  user: UserType;
}

const UserItem: FC<Props> = ({ user, ...restProps }) => {

  const { hoverRef, isHover } = useHover();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isExpelChildModalActive, setIsExpelChildModalActive] = useState<boolean>(false);

  useOutsideClick(hoverRef, () => setIsMenuOpen(false));

  const handleMenuClick = () => {
    setIsMenuOpen(prev => !prev);
  }

  const handleOpenExpelChildModal = () => {
    setIsExpelChildModalActive(prev => !prev);
  }

  const menuButtons = [
    { text: "Подробнее", onClick: () => { } },
    { text: "Назначить группу", onClick: () => { } },
    { text: "Исключить", onClick: handleOpenExpelChildModal },
  ]

  return (
    <>
      <Box ref={hoverRef} {...restProps}>
        <Grid
          container
          direction="row"
          sx={{ position: "relative", paddingTop: 1, paddingBottom: 1, alignItems: "center" }}
        >
          <Grid item xs={4}>
            <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
              <Image src={user.photo || userPhoto} alt="user" width={60} height={60} style={{ aspectRatio: 1, objectFit: "cover" }} />
              <Box>
                <Typography>{user.name.split(" ").slice(0, 2).join(" ")}</Typography>
                {
                  user.type === "user" &&
                  <Typography fontSize={12}>{user.birth}</Typography>
                }
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={1} />
          {
            user.type === "user" &&
            <Grid item xs={3}>
              <Typography>{user.group.name}</Typography>
            </Grid>
          }
          {
            user.type === "user" &&
            <Grid item xs={3}>
              <Box>
                <Stack spacing={0.5} direction="row">
                  <Typography fontSize={14}>Мед. справка:</Typography>
                  <Typography fontSize={14}>до</Typography>
                  {
                    user.medicalDocument?.expires
                      ? <Typography fontSize={14} color={new Date() > getDateFromString(user.medicalDocument.expires) ? "error" : "typography.main"}>
                        {user.medicalDocument.expires}
                      </Typography>
                      : <Typography>-</Typography>
                  }
                </Stack>
                <Stack spacing={0.5} direction="row">
                  <Typography fontSize={14}>Страховка:</Typography>
                  <Typography fontSize={14}>до</Typography>
                  {
                    user.insurance?.expires
                      ? <Typography fontSize={14} color={new Date() > getDateFromString(user.insurance.expires) ? "error" : "typography.main"}>
                        {user.insurance.expires}
                      </Typography>
                      : <Typography>-</Typography>
                  }
                </Stack>
                <Stack spacing={0.5} direction="row">
                  <Typography fontSize={14}>Абонемент:</Typography>
                  <Typography fontSize={14} color={user.trainingsLeft === 0 ? "" : user.trainingsLeft > 0 ? "typography.main" : "error"}>
                    {user.trainingsLeft = 5}
                  </Typography>
                  <Typography fontSize={14}>{incline(5, "занятие", "занятия", "занятий")}</Typography>
                </Stack>
                <Box sx={{
                  position: "absolute",
                  top: "50%",
                  right: 0,
                  transform: "translateY(-50%)",
                  zIndex: isMenuOpen ? 1000 : 10
                }}>
                  {
                    (isHover || isMenuOpen) &&
                    <IconButton color="black" onClick={handleMenuClick}>
                      <Image src={menuDropdownIcon} alt="menu icon" />
                    </IconButton>
                  }
                  <Dropdown open={isMenuOpen} sx={{ zIndex: 1000 }}>
                    {
                      menuButtons.map(button => (
                        <ListItemButton key={button.text} onClick={button.onClick} sx={{ paddingTop: 0.75, paddingBottom: 0.75 }}>
                          <Typography sx={{ margin: "0 auto", textAlign: "center" }}>{button.text}</Typography>
                        </ListItemButton>
                      ))
                    }
                  </Dropdown>
                </Box>
              </Box>
            </Grid>
          }
        </Grid>
      </Box>
      {
        typeof document !== "undefined" && user.type === "user" &&
        createPortal(
          <ExpelChildModal open={isExpelChildModalActive} handleCloseClick={handleOpenExpelChildModal} user={user} />,
          document.body.querySelector("#modal-container") as Element
        )
      }
    </>
  )
};

export default UserItem;
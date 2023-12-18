import { FC, MouseEvent, MouseEventHandler, useContext, useState } from "react";
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
import ChangeChildGroupModal from "../Modals/ChangeChildGroupModal";
import Avatar from "../UI/Avatar";
import ProfileModal from "../Modals/ProfileModal";
import { getNameAndSurname } from "@/helpers/getNameAndSurname";
import ChangeRoleModal from "../Modals/ChangeRoleModal";
import { AuthContext } from "@/contexts/authContext";
import DeleteRoleModal from "../Modals/DeleteRoleModal";

interface Props extends BoxProps {
  user: UserType;
  renderType?: boolean;
}

const UserItem: FC<Props> = ({ user, renderType = false, sx, ...restProps }) => {

  const { user: authUser } = useContext(AuthContext);

  const { hoverRef, isHover, setIsHover } = useHover();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [isProfileModalActive, setIsProfileModalActive] = useState<boolean>(false);
  const [isChangeRoleModalActive, setIsChangeRoleModalActive] = useState<boolean>(false);
  const [isDeleteRoleModalActive, setIsDeleteRoleModalActive] = useState<boolean>(false);
  const [isChangeChildGroupModalActive, setIsChangeChildGroupModalActive] = useState<boolean>(false);
  const [isExpelChildModalActive, setIsExpelChildModalActive] = useState<boolean>(false);
  const [isDeleteUserModalActive, setIsDeleteUserModalActive] = useState<boolean>(false);

  useOutsideClick(hoverRef, () => setIsMenuOpen(false));

  const clearStatesAndStopPropagation = (e?: MouseEvent<HTMLDivElement>) => {
    e?.stopPropagation();
    setIsMenuOpen(false);
    setIsHover(false);
  }

  const handleMenuClick = () => {
    setIsMenuOpen(prev => !prev);
  }

  const handleOpenProfileModalClick = (e?: MouseEvent<HTMLDivElement>) => {
    if ((e?.target as Element).id !== "menu-btn" && (e?.target as Element).id !== "menu-img") {
      setIsProfileModalActive(prev => !prev);
      clearStatesAndStopPropagation(e);
    }
  }

  const handleOpenChangeRoleModalClick = (e?: MouseEvent<HTMLDivElement>) => {
    setIsChangeRoleModalActive(prev => !prev);
    clearStatesAndStopPropagation(e);
  }
  
  const handleOpenDeleteRoleModalClick = (e?: MouseEvent<HTMLDivElement>) => {
    setIsDeleteRoleModalActive(prev => !prev);
    clearStatesAndStopPropagation(e);
  }

  const handleOpenChangeChildGroupModalClick = (e?: MouseEvent<HTMLDivElement>) => {
    setIsChangeChildGroupModalActive(prev => !prev);
    clearStatesAndStopPropagation(e);
  }

  const handleOpenExpelChildModalClick = (e?: MouseEvent<HTMLDivElement>) => {
    setIsExpelChildModalActive(prev => !prev);
    clearStatesAndStopPropagation(e);
  }

  const handleOpenDeleteUserModalClick = (e?: MouseEvent<HTMLDivElement>) => {
    setIsDeleteUserModalActive(prev => !prev);
    clearStatesAndStopPropagation(e);
  }

  const menuButtons = [
    { text: "Подробнее", onClick: handleOpenProfileModalClick, render: true },
    { text: "Назначить роль", onClick: handleOpenChangeRoleModalClick, render: user.type === "coach" && authUser?.id !== user.id },
    { text: "Снять роль", onClick: handleOpenDeleteRoleModalClick, render: user.type === "coach" && authUser?.id !== user.id && user.role !== null },
    { text: "Назначить группу", onClick: handleOpenChangeChildGroupModalClick, render: user.type === "user" },
    { text: "Исключить", onClick: handleOpenExpelChildModalClick, render: user.type === "user" && user.group !== null },
    { text: "Удалить", onClick: handleOpenDeleteUserModalClick, render: user.type === "coach" && !user.role && authUser?.id !== user.id || user.type === "user" && !user.group },
  ]

  return (
    <>
      <Box
        ref={hoverRef}
        sx={{
          position: "relative",
          ...sx
        }}
        onClick={handleOpenProfileModalClick}
        {...restProps}
      >
        <Box sx={{ marginRight: 3 }}>
          <Grid
            container
            direction="row"
            columnGap={2}
            sx={{
              paddingTop: 1,
              paddingBottom: 1,
              alignItems: "center",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#F8F8F8" }
            }}
          >
            <Grid item xs={4.5}>
              <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
                <Avatar photo={user.photo} />
                <Box>
                  <Typography>{getNameAndSurname(user.name)} {authUser?.id === user.id && "(Вы)"}</Typography>
                  {
                    user.type === "user" &&
                    <Typography fontSize={12}>{user.birth}</Typography>
                  }
                </Box>
              </Stack>
            </Grid>
            {
              renderType &&
              <Grid item xs={2}>
                {user.type === "user" && <Typography>Ребенок</Typography>}
                {user.type === "coach" && user.role?.value === "SUPER_ADMIN" && <Typography>Главный тренер</Typography>}
                {user.type === "coach" && user.role?.value === "ADMIN" && <Typography>Тренер</Typography>}
                {user.type === "coach" && user.role === null && <Typography>Тренер (без роли)</Typography>}
              </Grid>
            }
            <Grid item xs={2}>
              {
                user.type === "user" && (
                  user.group
                    ? <Typography>{user.group.name}</Typography>
                    : <Typography>Без группы</Typography>
                )
              }
            </Grid>
            {
              user.type === "user" &&
              <Grid item xs={2.75}>
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
                      {user.trainingsLeft}
                    </Typography>
                    <Typography fontSize={14}>{incline(5, "занятие", "занятия", "занятий")}</Typography>
                  </Stack>
                </Box>
              </Grid>
            }
          </Grid>
        </Box>
        <Box sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: isMenuOpen ? 1000 : 10
        }}>
          {
            (isHover || isMenuOpen) &&
            <IconButton color="black" onClick={handleMenuClick} id="menu-btn">
              <Image src={menuDropdownIcon} alt="menu icon" id="menu-img" />
            </IconButton>
          }
          <Dropdown open={isMenuOpen} sx={{ zIndex: 1000 }}>
            {
              menuButtons.map(button => (
                button.render &&
                <ListItemButton key={button.text} onClick={button.onClick} sx={{ paddingTop: 0.75, paddingBottom: 0.75 }}>
                  <Typography sx={{ margin: "0 auto", textAlign: "center" }}>{button.text}</Typography>
                </ListItemButton>
              ))
            }
          </Dropdown>
        </Box>
      </Box>
      {
        typeof document !== "undefined" &&
        createPortal(
          <ProfileModal open={isProfileModalActive} handleCloseClick={handleOpenProfileModalClick} user={user} />,
          document.body.querySelector("#modal-container") as Element
        )
      }
      {
        typeof document !== "undefined" && user.type === "user" &&
        createPortal(
          <ChangeChildGroupModal open={isChangeChildGroupModalActive} handleCloseClick={handleOpenChangeChildGroupModalClick} user={user} />,
          document.body.querySelector("#modal-container") as Element
        )
      }
      {
        typeof document !== "undefined" && user.type === "user" &&
        createPortal(
          <ExpelChildModal open={isExpelChildModalActive} handleCloseClick={handleOpenExpelChildModalClick} user={user} />,
          document.body.querySelector("#modal-container") as Element
        )
      }
      {
        typeof document !== "undefined" && user.type === "coach" &&
        createPortal(
          <ChangeRoleModal open={isChangeRoleModalActive} handleCloseClick={handleOpenChangeRoleModalClick} user={user} />,
          document.body.querySelector("#modal-container") as Element
        )
      }
      {
        typeof document !== "undefined" && user.type === "coach" &&
        createPortal(
          <DeleteRoleModal open={isDeleteRoleModalActive} handleCloseClick={handleOpenDeleteRoleModalClick} user={user} />,
          document.body.querySelector("#modal-container") as Element
        )
      }
    </>
  )
};

export default UserItem;
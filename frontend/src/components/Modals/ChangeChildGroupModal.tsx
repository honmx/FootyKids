import { FC, useContext, useEffect, useState } from "react";
import ModalWrapper from "../Wrappers/ModalWrapper";
import { IModalProps } from "@/types/IModalProps";
import { Box, Button, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import groupsService from "@/services/groupsService";
import { IGroup } from "@/types/IGroup";
import { IChild } from "@/types/IChild";
import Image from "next/image";
import userPhoto from "@/assets/user.jpg";
import Avatar from "../UI/Avatar";
import usersService from "@/services/usersService";
import { GroupContext } from "@/contexts/groupContext";
import { UsersContext } from "@/contexts/usersContext";
import { getNameAndSurname } from "@/helpers/getNameAndSurname";

interface Props extends IModalProps {
  user: IChild;
}

const ChangeChildGroupModal: FC<Props> = ({ open, handleCloseClick, user }) => {

  const { group, setGroup } = useContext(GroupContext);
  const { users, setUsers } = useContext(UsersContext);

  const [groups, setGroups] = useState<Pick<IGroup, "id" | "name">[]>([]);
  const [selectedGroupId, setSelectedGroupId] = useState<number>(user.group?.id || groups[0]?.id || 0);

  useEffect(() => {
    setSelectedGroupId(user.group?.id || groups[0]?.id || 0);
  }, [open]);

  useEffect(() => {
    (async () => {
      const groups = await groupsService.getGroups();
      setGroups(groups || []);
    })()
  }, []);

  const handleGroupChange = (e: SelectChangeEvent<number>) => {
    setSelectedGroupId(Number(e.target.value));
  }

  const handleChangeGroupClick = async () => {
    if (selectedGroupId !== user.group?.id) {
      const userWithChangedGroup = await usersService.changeGroup(user.id, selectedGroupId);

      if (!userWithChangedGroup) return;

      setGroup({ ...group, participants: group?.participants?.filter(user => user.id !== userWithChangedGroup.id) });
      setUsers(users.map(user => user.id === userWithChangedGroup.id ? userWithChangedGroup : user));
    }

    handleCloseClick();
  }

  return (
    <ModalWrapper open={open} handleCloseClick={handleCloseClick}>
      <Stack spacing={3} sx={{ padding: 2 }}>
        <Typography fontSize={28}>Назначить группу</Typography>
        <Stack spacing={3} direction="row" sx={{ alignItems: "center" }}>
          <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
            <Avatar photo={user.photo} />
            <Box>
              <Typography>{getNameAndSurname(user.name)}</Typography>
              <Typography fontSize={12}>{user.birth}</Typography>
            </Box>
          </Stack>
          <Select value={selectedGroupId} onChange={handleGroupChange}>
            {
              groups.map(group => (
                <MenuItem key={group.id} value={group.id}>{group.name}</MenuItem>
              ))
            }
          </Select>
        </Stack>
        <Button onClick={handleChangeGroupClick}>Подтвердить</Button>
      </Stack>
    </ModalWrapper>
  )
};

export default ChangeChildGroupModal;
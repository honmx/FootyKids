import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import ModalWrapper from "../Wrappers/ModalWrapper";
import { IModalProps } from "@/types/IModalProps";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import ModalItemWithScrollingContentWrapper from "../Wrappers/ModalItemWithScrollingContentWrapper";
import { IChild } from "@/types/IChild";
import usersService from "@/services/usersService";
import UserSelectItem from "../Items/UserSelectItem";
import groupsService from "@/services/groupsService";
import { GroupContext } from "@/contexts/groupContext";
import { useFilteredUsers } from "@/hooks/useFilteredUsers";
import { getNameAndSurname } from "@/helpers/getNameAndSurname";

interface Props extends IModalProps {

}

const AddChildrenModal: FC<Props> = ({ open, handleCloseClick }) => {

  const { group, setGroup } = useContext(GroupContext);

  const [users, setUsers] = useState<IChild[]>([]);
  const [name, setName] = useState<string>("");
  const [selectedUsersId, setSelectedUsersId] = useState<number[]>([]);

  const { filteredUsers } = useFilteredUsers(users, name);

  useEffect(() => {
    (async () => {
      const users = await usersService.getUsersWithoutGroup() || [];
      setUsers(users);
    })();
    setSelectedUsersId([]);
  }, [open]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleSelectChild = (id: number) => {
    if (selectedUsersId.find(userId => userId === id)) {
      setSelectedUsersId(selectedUsersId.filter(userId => userId !== id));
    } else {
      setSelectedUsersId(prev => [...prev, id]);
    }
  }

  const handleAddChildrenClick = async () => {
    const newParticipants = await groupsService.addChildren(group.id, selectedUsersId);


    if (newParticipants) { 
      setGroup({ ...group, participants: newParticipants });
    }
    
    handleCloseClick();
  }

  return (
    <ModalWrapper open={open} handleCloseClick={handleCloseClick} sx={{ width: "100%" }}>
      <Stack spacing={3} sx={{ padding: 2 }}>
        <Stack spacing={5} direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography fontSize={28}>Добавить детей</Typography>
          <TextField variant="standard" placeholder="Имя/фамилия" onChange={handleNameChange} sx={{ width: "150px" }} />
        </Stack>
        <Box>
          {
            filteredUsers
              .sort((a, b) => getNameAndSurname(a.name).toLowerCase() > getNameAndSurname(b.name).toLowerCase() ? 1 : -1)
              .map((user, i) => (
                <UserSelectItem
                  key={user.id}
                  user={user as Pick<IChild, "id" | "name" | "photo" | "birth">}
                  handleSelectChild={handleSelectChild}
                  sx={{ borderBottom: i < filteredUsers.length - 1 ? "1px solid #DDD" : 0 }}
                />
              ))
          }
          {
            users.length === 0 && <>
              <Typography textAlign="center" sx={{ margin: "40px 0" }}>Отсутствуют пользователи без группы</Typography>
            </>
          }
        </Box>
        <Button onClick={handleAddChildrenClick} disabled={users.length === 0}>Добавить</Button>
      </Stack>
    </ModalWrapper>
  )
};

export default AddChildrenModal;
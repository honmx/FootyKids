import { FC, useContext, useState } from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import smallPlusIcon from "@/assets/small plus icon.svg";
import checkIcon from "@/assets/check.svg";
import Image from "next/image";
import { GroupContext } from "@/contexts/groupContext";
import UserItem from "../Items/UserItem";
import { createPortal } from "react-dom";
import AddChildrenModal from "../Modals/AddChildrenModal";

interface Props {

}

const Participants: FC<Props> = ({ }) => {

  const { group } = useContext(GroupContext);

  const [isAddChildrenModalActive, setIsAddChildrenModalActive] = useState<boolean>(false);

  const handleOpenAddChildrenModal = () => {
    setIsAddChildrenModalActive(prev => !prev);
  }

  return (
    <>
      <Paper sx={{ padding: 3, overflow: "visible" }}>
        <Stack spacing={3}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography fontSize={28}>Участники</Typography>
            <Button onClick={handleOpenAddChildrenModal}>
              <Image src={smallPlusIcon} alt="change icon" width={12} height={12} style={{ marginRight: 5 }} />
              Добавить
            </Button>
          </Box>
          <Box>
            {
              group.participants
                .sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
                .map((participant, i) => (
                  <UserItem key={participant.id} user={participant} sx={{ borderBottom: i !== group.participants.length - 1 ? "1px solid #DDD" : 0 }} />
                ))
            }
          </Box>
        </Stack>
      </Paper>
      {
        typeof document !== "undefined" &&
        createPortal(
          <AddChildrenModal open={isAddChildrenModalActive} handleCloseClick={handleOpenAddChildrenModal} />,
          document.body.querySelector("#modal-container") as Element
        )
      }
    </>
  )
};

export default Participants;
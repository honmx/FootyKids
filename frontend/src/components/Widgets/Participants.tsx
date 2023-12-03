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
          <Typography fontSize={28}>Участники</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={handleOpenAddChildrenModal}>
              <Image src={smallPlusIcon} alt="change icon" width={12} height={12} style={{ marginRight: 5 }} />
              Добавить
            </Button>
            <Button>
              <Image src={checkIcon} alt="check icon" width={15} height={15} style={{ marginRight: 5 }} />
              Отметить
            </Button>
          </Box>
          <Box>
            {
              group.participants.map((participant, i) => (
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
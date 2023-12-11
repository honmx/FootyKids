import { ChangeEvent, FC, MouseEvent, MouseEventHandler, useState } from "react";
import { IChild } from "@/types/IChild";
import { Box, Checkbox, Stack, StackProps, Typography } from "@mui/material";
import Image from "next/image";
import userPhoto from "@/assets/user.jpg";
import emptyCheckBoxIcon from "@/assets/empty checkbox icon.svg";
import checkedCheckBoxIcon from "@/assets/checked checkbox icon.svg";
import Avatar from "../UI/Avatar";

interface Props extends StackProps {
  user: Pick<IChild, "id" | "name" | "photo" | "birth">;
  handleSelectChild: (id: number) => void;
}

const UserSelectItem: FC<Props> = ({ user, handleSelectChild, sx, ...restProps }) => {

  const [checked, setChecked] = useState<boolean>(false);

  const handleClick = (e: any) => {
    if (e?.target?.classList?.contains("PrivateSwitchBase-input")) return;

    setChecked(prev => !prev);
    handleSelectChild(user.id);
  }

  const handleChange = () => {
    setChecked(prev => !prev);
    handleSelectChild(user.id);
  }

  return (
    <Stack
      direction="row"
      spacing={5}
      onClick={handleClick}
      sx={{
        justifyContent: "space-between",
        paddingTop: 1,
        paddingBottom: 1,
        cursor: "pointer",
        ...sx
      }}
      {...restProps}
    >
      <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
        <Avatar photo={user.photo} />
        <Box>
          <Typography>{user.name.split(" ").slice(0, 2).join(" ")}</Typography>
          <Typography fontSize={12}>{user.birth}</Typography>
        </Box>
      </Stack>
      <Checkbox checked={checked} onChange={handleChange} />
    </Stack>
  )
};

export default UserSelectItem;
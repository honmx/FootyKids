import { FC } from "react";
import { IChild } from "@/types/IChild";
import { Box, Checkbox, Stack, StackProps, Typography } from "@mui/material";
import Image from "next/image";
import userPhoto from "@/assets/user.jpg";
import emptyCheckBoxIcon from "@/assets/empty checkbox icon.svg";
import checkedCheckBoxIcon from "@/assets/checked checkbox icon.svg";

interface Props extends StackProps {
  user: Pick<IChild, "id" | "name" | "photo" | "birth">;
  handleSelectChild: (id: number) => void;
}

const UserSelectItem: FC<Props> = ({ user, handleSelectChild, sx, ...restProps }) => {
  return (
    <Stack
      direction="row"
      spacing={5}
      sx={{
        justifyContent: "space-between",
        paddingTop: 1,
        paddingBottom: 1,
        ...sx
      }}
      {...restProps}
    >
      <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
        <Image src={user.photo || userPhoto} alt="user photo" width={60} height={60} style={{ aspectRatio: 1, objectFit: "cover" }} />
        <Box>
          <Typography>{user.name.split(" ").slice(0, 2).join(" ")}</Typography>
          <Typography fontSize={12}>{user.birth}</Typography>
        </Box>
      </Stack>
      <Checkbox onChange={() => handleSelectChild(user.id)} />
    </Stack>
  )
};

export default UserSelectItem;
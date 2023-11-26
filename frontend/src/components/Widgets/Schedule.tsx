import { FC } from "react";
import PickDateSelectsGroup from "./PickDateSelectsGroup";
import { Box, Stack } from "@mui/material";

interface Props {

}

const Schedule: FC<Props> = ({ }) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <PickDateSelectsGroup />
        <Stack spacing={2} direction="row">
          <p>button 1</p>
          <p>button 2</p>
        </Stack>
      </Box>
    </>
  )
};

export default Schedule;
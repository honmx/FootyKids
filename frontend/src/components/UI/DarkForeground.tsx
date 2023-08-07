import { FC, ReactNode } from "react";
import { Box } from "@mui/material";

interface Props {
  children: ReactNode;
}

const DarkForeground: FC<Props> = ({ children }) => {
  return (
    <Box sx={{ position: "relative" }}>
      {children}
      <Box sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#000000AA",
      }} />
    </Box>
  )
};

export default DarkForeground;

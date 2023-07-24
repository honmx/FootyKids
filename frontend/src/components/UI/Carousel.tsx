import { FC, ReactNode } from "react";
import { Box } from "@mui/material";

interface Props {
  children: ReactNode;
}

const Carousel: FC<Props> = ({ children }) => {
  return (
    <Box sx={{
      display: "flex",
      flexWrap: "nowrap",
      overflow: "scroll",
      "&::-webkit-scrollbar": {
        display: "none"
      }
    }}>
      {children}
    </Box>
  )
};

export default Carousel;
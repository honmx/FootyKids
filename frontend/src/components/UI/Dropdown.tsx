import { Box, BoxProps, Paper } from "@mui/material";
import { FC, RefObject, useEffect } from "react";

interface Props extends BoxProps {
  open: boolean;
}

const Dropdown: FC<Props> = ({ open, children, sx, ...restProps }) => {

  return (
    open && <>
      <Box
        sx={{
          position: "absolute",
          top: "100%",
          height: "5px",
          width: "100%",
        }}
        {...restProps}
      />
      <Paper
        sx={{
          position: "absolute",
          top: "calc(100% + 5px)",
          left: "50%",
          transform: "translateX(-50%)",
          border: "1px solid #DDDDDD",
        }}
      >
        {children}
      </Paper>
    </>
  )
};

export default Dropdown;
import { Box, Paper, PaperProps } from "@mui/material";
import { FC, RefObject, useEffect } from "react";

interface Props extends PaperProps {
  open: boolean;
}

const Dropdown: FC<Props> = ({ open, children, sx, ...restProps }) => {

  return (
    open && <>
      <Box sx={{
        position: "absolute",
        top: "100%",
        height: "5px",
        width: "100%",
      }}
      />
      <Paper
        sx={{
          position: "absolute",
          top: "calc(100% + 5px)",
          left: "50%",
          transform: "translateX(-50%)",
          border: "1px solid #DDDDDD",
          ...sx
        }}
        {...restProps}
      >
        {children}
      </Paper>
    </>
  )
};

export default Dropdown;
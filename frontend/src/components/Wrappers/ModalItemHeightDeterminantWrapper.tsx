import { Box } from "@mui/material";
import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {

}

const ModalItemHeightDeterminantWrapper: FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        width: {
          smallPhone: "100%",
          tablet: "50%"
        },
        maxWidth: {
          smallPhone: "400px",
          tablet: "100%"
        }
      }}
    >
      {children}
    </Box>
  )
};

export default ModalItemHeightDeterminantWrapper;

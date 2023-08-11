import { Stack } from "@mui/material";
import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {

}

const ModalContentDirectionDeterminant: FC<Props> = ({ children }) => {
  return (
    <Stack
      direction={{
        smallPhone: "column-reverse",
        tablet: "row"
      }}
    >
      {children}
    </Stack>
  )
};

export default ModalContentDirectionDeterminant;

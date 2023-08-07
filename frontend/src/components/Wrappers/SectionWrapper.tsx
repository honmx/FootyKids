import { Stack } from "@mui/material";
import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  
}

const SectionWrapper: FC<Props> = ({ children }) => {
  return (
    <Stack component="section" direction="column" spacing={5}>
      {children}
    </Stack>
  )
};

export default SectionWrapper;

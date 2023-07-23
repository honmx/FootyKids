import { FC } from "react";
import Title from "./Title";
import { Box, Typography } from "@mui/material";

interface Props {

}

const AboutUs: FC<Props> = ({ }) => {
  return (
    <Box>
      <Title>
        <Typography fontSize={30} fontWeight={700} color="typography.light">О нас</Typography>
      </Title>
    </Box>
  )
};

export default AboutUs;

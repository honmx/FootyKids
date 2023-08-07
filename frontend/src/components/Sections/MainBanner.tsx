import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import banner from "@/assets/photo-bg.jpg";
import DarkForeground from "@/components/UI/DarkForeground";
import Title from "@/components/UI/Title";
import SectionWrapper from "../Wrappers/SectionWrapper";

interface Props {

}

const MainBanner: FC<Props> = ({ }) => {
  return (
    <SectionWrapper sx={{ position: "relative" }}>
      <DarkForeground>
        <Image src={banner} alt="banner" style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          objectPosition: "top",
          filter: "grayscale(100%)",
        }} />
      </DarkForeground>
      <Box position="absolute" sx={{
        top: "50%",
        left: "15px",
        transform: "translateY(-50%)",
        color: "typography.light"
      }}>
        <Stack direction="column" spacing={3}>
          <Title type="main">
            <Typography fontSize={80} fontWeight={700} component="h1">FootyKids</Typography>
          </Title>
          <Typography lineHeight={1.2} fontSize={22} fontWeight={600}>Футбольная школа <br /> для детей от 4 лет</Typography>
          <Typography lineHeight={1.2} fontSize={22} fontWeight={600}>Мы учим детей любить спорт!</Typography>
        </Stack>
      </Box>
    </SectionWrapper>
  )
};

export default MainBanner;

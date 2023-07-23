import { FC } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import banner from "@/assets/photo-bg.jpg";
import DarkForeground from "@/components/DarkForeground";
import Title from "@/components/Title";

interface Props {

}

const MainBanner: FC<Props> = ({ }) => {
  return (
    <Box position="relative">
      <DarkForeground>
        <Image src={banner} alt="banner" style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          filter: "grayscale(100%)",
        }} />
      </DarkForeground>
      <Container maxWidth={false}>
        <Box position="absolute" sx={{
          top: "50%",
          left: "15px",
          transform: "translateY(-50%)"
        }}>
          <Stack direction="column" spacing={3}>
            <Title type="main">
              <Typography fontSize={80} fontWeight={700} lineHeight={1.35} color="typography.light" component="h1">FootyKids</Typography>
            </Title>
            <Typography color="typography.light" lineHeight={1.2} fontSize={22} fontWeight={600}>Футбольная школа <br /> для детей от 4 лет</Typography>
            <Typography color="typography.light" lineHeight={1.2} fontSize={22} fontWeight={600}>Мы учим детей любить спорт!</Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
};

export default MainBanner;

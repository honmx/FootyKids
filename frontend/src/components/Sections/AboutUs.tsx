import { FC, useState } from "react";
import Image from "next/image";
import { Box, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import AdvantagesCard from "../Cards/AdvantagesCard";
import PurposeCard from "../Cards/PurposeCard";
import AboutCard from "../Cards/AboutCard";
import SectionWrapper from "../Wrappers/SectionWrapper";
import Subtitle from "../UI/Subtitle";
import DarkForeground from "../UI/DarkForeground";
import { useResize } from "@/hooks/useResize";
import { infoAboutSchool } from "@/data/infoAboutSchool";
import { incline } from "@/helpers/incline";
import { purposes } from "@/data/purposes";
import videoPreviewPhoto from "@/assets/video-preview.jpg";
import playVideoBtn from "@/assets/play-video-btn.svg";

interface Props {
  coachesCount: number;
}

const AboutUs: FC<Props> = ({ coachesCount }) => {

  const isSmallerTablet = useResize("tablet");

  const [isVideoActive, setIsVideoActive] = useState<boolean>(false);

  const handleStartVideoClick = () => {
    setIsVideoActive(true);
  }

  return (
    <SectionWrapper title="О нас">
      <Box>
        <Container maxWidth="desktop" disableGutters={isSmallerTablet}>
          {
            isVideoActive
              ? (
                <iframe
                  src="https://www.youtube.com/embed/7xJ7SEru57I?autoplay=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    width: "100%",
                    aspectRatio: 1.77,
                    borderRadius: isSmallerTablet ? 0 : "10px",
                  }}
                />
              ) : (
                <Box sx={{ borderRadius: { smallerPhone: 0, tablet: "10px" }, overflow: "hidden", position: "relative" }}>
                  <DarkForeground>
                    <Image
                      src={videoPreviewPhoto}
                      alt="video preview"
                      style={{
                        objectFit: "cover",
                        aspectRatio: 1.77,
                        filter: "grayscale(100%)"
                      }}
                    />
                  </DarkForeground>
                  <IconButton
                    sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                    onClick={handleStartVideoClick}
                  >
                    <Image src={playVideoBtn} alt="play button" width={50} />
                  </IconButton>
                </Box>
              )
          }
        </Container>
      </Box>
      <Box>
        <Container>
          <Stack
            direction="row"
            display="grid"
            gridTemplateColumns={{
              smallPhone: "1fr 1fr",
              tablet: "1fr 1fr 1fr 1fr"
            }}
            justifyItems={{
              smallPhone: "center",
              tablet: "none"
            }}
            columnGap={5}
            rowGap={2}
          >
            <AdvantagesCard accentText="5+" usualText="лет опыта" />
            <AdvantagesCard accentText={coachesCount.toString()} usualText={incline(coachesCount, "тренер", "тренера", "тренеров")} />
            <AdvantagesCard accentText="250+" usualText="детей" />
            <AdvantagesCard accentText="5+" usualText="лет опыта" />
          </Stack>
        </Container>
      </Box>
      <Subtitle textAlign="center">Цели проекта</Subtitle>
      <Box>
        <Container sx={{
          display: "grid",
          gridTemplateAreas: {
            smallPhone: `
              "a"
              "b"
              "c"
              "d"
            `,
            smallTablet: `
              "a a a . . . ."
              "a a a . b b b"
              "c c c . b b b"
              "c c c . d d d"
              "c c c . d d d"
              ". . . . d d d"
            `,
          },
          marginTop: "-55px"
        }}>
          {
            purposes.map(purpose => (
              <PurposeCard
                key={purpose.text}
                count={purpose.count}
                gridArea={purpose.gridArea}
                justifySelf={{
                  smallPhone: "none",
                  smallTablet: purpose.justifySelf
                }}
              >
                {purpose.text}
              </PurposeCard>
            ))
          }
        </Container>
      </Box>
      <Box>
        <Container>
          <Subtitle sx={{ marginBottom: "50px" }}>Футбольная школа FootyKids - это</Subtitle>
          <Grid container spacing={4}>
            {
              infoAboutSchool.map(info => (
                <Grid
                  key={info.text}
                  item
                  xs={isSmallerTablet ? 12 : info.xs}
                >
                  <AboutCard icon={info.icon}>{info.text}</AboutCard>
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </Box>
    </SectionWrapper >
  )
};

export default AboutUs;

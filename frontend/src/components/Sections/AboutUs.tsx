import { FC } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import AdvantagesCard from "../Cards/AdvantagesCard";
import PurposeCard from "../Cards/PurposeCard";
import AboutCard from "../Cards/AboutCard";
import SectionWrapper from "../Wrappers/SectionWrapper";
import { incline } from "@/helpers/incline";
import { infoAboutSchool } from "@/data/infoAboutSchool";
import { purposes } from "@/data/purposes";

interface Props {
  coachesCount: number;
}

const AboutUs: FC<Props> = ({ coachesCount }) => {
  return (
    <SectionWrapper title="О нас">
      <Box>
        <iframe
          src="https://www.youtube.com/embed/7xJ7SEru57I"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            width: "100%",
            aspectRatio: 1.77
          }}
        />
      </Box>
      <Box>
        <Container>
          <Stack direction="row" display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr" columnGap={5}>
            <AdvantagesCard accentText="5+" usualText="лет опыта" />
            <AdvantagesCard accentText={coachesCount.toString()} usualText={incline(coachesCount, "тренер", "тренера", "тренеров")} />
            <AdvantagesCard accentText="250+" usualText="детей" />
            <AdvantagesCard accentText="5+" usualText="лет опыта" />
          </Stack>
        </Container>
      </Box>
      <Typography textAlign="center" fontSize={26} fontWeight={300}>Цели проекта</Typography>
      <Box>
        <Container sx={{
          display: "grid",
          gridTemplateAreas: `
            "a a a . . . ."
            "a a a . b b b"
            "c c c . b b b"
            "c c c . d d d"
            "c c c . d d d"
            ". . . . d d d"
          `,
          marginTop: "-55px"
        }}>
          {
            purposes.map(purpose => (
              <PurposeCard
                key={purpose.text}
                count={purpose.count}
                gridArea={purpose.gridArea}
                justifySelf={purpose.justifySelf}
              >
                {purpose.text}
              </PurposeCard>
            ))
          }
        </Container>
      </Box>
      <Box>
        <Container>
          <Typography fontSize={26} fontWeight={300} sx={{ marginBottom: "50px" }}>Футбольная школа FootyKids - это</Typography>
          <Grid container spacing={4}>
            {
              infoAboutSchool.map(info => (
                <Grid key={info.text} item xs={info.xs}><AboutCard icon={info.icon}>{info.text}</AboutCard></Grid>
              ))
            }
          </Grid>
        </Container>
      </Box>
    </SectionWrapper>
  )
};

export default AboutUs;

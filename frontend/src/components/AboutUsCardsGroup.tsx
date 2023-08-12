import { Box, Container, Grid } from "@mui/material";
import { FC } from "react";
import Subtitle from "./UI/Subtitle";
import { infoAboutSchool } from "@/data/infoAboutSchool";
import AboutCard from "./Cards/AboutCard";
import { useResize } from "@/hooks/useResize";

interface Props {

}

const AboutUsCardsGroup: FC<Props> = ({ }) => {

  const isSmallerTablet = useResize("tablet");

  return (
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
  )
};

export default AboutUsCardsGroup;

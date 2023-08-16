import { FC } from "react";
import SectionWrapper from "../Wrappers/SectionWrapper";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { places } from "@/data/places";
import PlaceCard from "../Cards/PlaceCard";

interface Props {

}

const Places: FC<Props> = ({ }) => {

  return (
    <SectionWrapper title="Филиалы">
      <Box>
        <Container>
          <Stack spacing={3}>
            <Typography>Мы создаём условия, при которых футбол становится
              доступнее и ближе к каждому ребёнку, <br /> поэтому проводим
              занятия на лучших площадках в разных районах города.</Typography>
            <Stack
              direction="row"
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  smallPhone: "1fr",
                  smallTablet: "repeat(2, 1fr)",
                  tablet: "repeat(3, 1fr)"
                },
                gap: 3
              }}
            >
              {
                places.map(place => (
                  <PlaceCard key={place.name} place={place} />
                ))
              }
            </Stack>
          </Stack>
        </Container>
      </Box>
    </SectionWrapper>
  )
};

export default Places;

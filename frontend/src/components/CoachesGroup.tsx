import { ICoach } from "@/types/ICoach";
import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";
import CoachCard from "./Cards/CoachCard";
import { useResize } from "@/hooks/useResize";
import Carousel from "./UI/Carousel";

interface Props {
  singularTitle: string;
  pluralTitle: string;
  coaches: ICoach[];
}

const CoachesGroup: FC<Props> = ({ singularTitle, pluralTitle, coaches }) => {

  const isTablet = useResize(1023);

  return (
    <Box>
      <Container>
        <Typography
          fontWeight={300}
          fontSize={20}
          sx={{
            marginBottom: 3
          }}
        >
          {coaches.length === 1 ? singularTitle : pluralTitle}
        </Typography>
        {
          !isTablet &&
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 3,
            }}
          >
            {
              coaches.map(coach => <CoachCard key={coach.id} coach={coach} />)
            }
          </Box>
        }
      </Container>
      {
        isTablet &&
        <Carousel>
          {
            coaches.map(coach => <CoachCard key={coach.id} coach={coach} />)
          }
        </Carousel>
      }
    </Box>
  )
};

export default CoachesGroup;

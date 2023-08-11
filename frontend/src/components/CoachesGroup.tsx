import { ICoach } from "@/types/ICoach";
import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import CoachCard from "./Cards/CoachCard";
import Carousel from "./UI/Carousel";
import { useResize } from "@/hooks/useResize";

interface Props {
  title: string;
  coaches: ICoach[];
}

const CoachesGroup: FC<Props> = ({ title, coaches }) => {

  const isTablet = useResize("laptop");

  return (
    <Box>
      <Container>
        <Typography
          fontWeight={300}
          fontSize={20}
          sx={{ marginBottom: 3 }}
        >
          {title}
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
            {coaches.map(coach => <CoachCard key={coach.id} coach={coach} />)}
          </Box>
        }
      </Container>
      {
        isTablet &&
        <Carousel>
          {coaches.map(coach => <CoachCard key={coach.id} coach={coach} />)}
        </Carousel>
      }
    </Box>
  )
};

export default CoachesGroup;

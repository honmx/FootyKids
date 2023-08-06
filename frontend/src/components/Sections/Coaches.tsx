import { FC, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SectionWrapper from "./SectionWrapper";
import Title from "../UI/Title";
import { ICoach } from "@/types/ICoach";
import Carousel from "../UI/Carousel";
import CoachCard from "../Cards/CoachCard";
import { useResize } from "@/hooks/useResize";
import CoachesGroup from "../CoachesGroup";

interface Props {
  coaches: ICoach[];
}

const Coaches: FC<Props> = ({ coaches }) => {

  const isSmaller = useResize(1024);

  return (
    <SectionWrapper>
      <Title textAlign="center">
        <Typography component="h3" fontSize={30} fontWeight={700}>Тренерский состав</Typography>
      </Title>
      <CoachesGroup
        singularTitle="Тренер"
        pluralTitle="Тренеры"
        coaches={coaches}
      />
      {/* <Carousel>
        {
          new Array(20)
            .fill(coaches[1])
            .map((coach, i) => <CoachCard key={i} coach={coach} />)
        }
      </Carousel> */}
      {/* <CoachCard coach={coaches[1]} /> */}
    </SectionWrapper>
  )
};

export default Coaches;

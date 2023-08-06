import { FC } from "react";
import Title from "../UI/Title";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import AdvantagesCard from "../Cards/AdvantagesCard";
import PurposeCard from "../Cards/PurposeCard";
import AboutCard from "../Cards/AboutCard";
import standarts from "@/assets/standarts.svg";
import peopleGroup from "@/assets/3people.svg";
import increase from "@/assets/increase.svg";
import twoPeople from "@/assets/2people.svg";
import ball from "@/assets/ball.svg";
import diary from "@/assets/diary.svg";
import SectionWrapper from "./SectionWrapper";

interface Props {

}

const AboutUs: FC<Props> = ({ }) => {
  return (
    <SectionWrapper>
      <Title sx={{ textAlign: "center" }}>
        <Typography fontSize={30} fontWeight={700} component="h3">О нас</Typography>
      </Title>
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
            <AdvantagesCard accentText="10" usualText="тренеров" />
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
          <PurposeCard count="01" gridArea="a" justifySelf="start">Вовлечь в футбол как можно больше детей</PurposeCard>
          <PurposeCard count="02" gridArea="b" justifySelf="end">Привить детям любовь к спорту и здоровому образу жизни</PurposeCard>
          <PurposeCard count="03" gridArea="c" justifySelf="start">Дать качественную начальную футбольную подготовку</PurposeCard>
          <PurposeCard count="04" gridArea="d" justifySelf="end">Выявить одарённых детей и развить их способности</PurposeCard>
        </Container>
      </Box>
      <Box>
        <Container>
          <Typography fontSize={26} fontWeight={300} sx={{ marginBottom: "50px" }}>Футбольная школа FootyKids - это</Typography>
          <Grid container spacing={4}>
            <Grid item xs={4}><AboutCard icon={standarts}>Европейские стандарты обучения</AboutCard></Grid>
            <Grid item xs={8}><AboutCard icon={peopleGroup}>Квалифицированный тренерский состав, прошедший обучение в центре подготовки тренеров Российского Футбольного Союза</AboutCard></Grid>
            <Grid item xs={5}><AboutCard icon={increase}>Собственная, постоянно обновляющаяся методика</AboutCard></Grid>
            <Grid item xs={7}><AboutCard icon={twoPeople}>2 тренера проводят занятие с группой до 15 детей, что позволяет уделить внимание каждому юному футболисту</AboutCard></Grid>
            <Grid item xs={7}><AboutCard icon={diary}>Мотивационная система «Дневник футболиста»: После каждой тренировки ребенок получает наклейку в виде золотого либо серебряного мяча. По ходу заполнения дневника юный футболист зарабатывает медали и кубки.</AboutCard></Grid>
            <Grid item xs={5}><AboutCard icon={ball}>Специализированные мячи, разработанные под анатомию стопы детей от 4-х лет, а также разнообразный инвентарь</AboutCard></Grid>
          </Grid>
        </Container>
      </Box>
    </SectionWrapper>
  )
};

export default AboutUs;

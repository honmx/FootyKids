import { FC } from "react";
import Title from "./UI/Title";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import AdvantagesCard from "./UI/Cards/AdvantagesCard";
import PurposeCard from "./UI/Cards/PurposeCard";
import AboutCard from "./UI/Cards/AboutCard";
import standarts from "@/assets/standarts.svg";
import peopleGroup from "@/assets/3people.svg";
import increase from "@/assets/increase.svg";
import twoPeople from "@/assets/2people.svg";
import ball from "@/assets/ball.svg";
import diary from "@/assets/diary.svg";

interface Props {

}

const AboutUs: FC<Props> = ({ }) => {
  return (
    <Stack direction="column" component="section" spacing={7.5}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Title>
          <Typography fontSize={30} fontWeight={700} color="typography.light" component="h3">О нас</Typography>
        </Title>
      </Box>
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
        <Container maxWidth="md">
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
        <Container maxWidth="md" sx={{
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
        <Container maxWidth="md">
          <Typography fontSize={26} fontWeight={300} sx={{ marginBottom: "50px" }}>Футбольная школа FootyKids - это</Typography>
          <Grid container spacing={4}>
            <Grid item xs={4}><AboutCard icon={standarts}>Европейские стандарты обучения</AboutCard></Grid>
            <Grid item xs={8}><AboutCard icon={peopleGroup}>Квалифицированный тренерский состав, прошедший обучение в центре подготовки тренеров Российского Футбольного Союза</AboutCard></Grid>
            <Grid item xs={4}><AboutCard icon={increase}>Собственная, постоянно обновляющаяся методика</AboutCard></Grid>
            <Grid item xs={8}><AboutCard icon={twoPeople}>2 тренера проводят занятие с группой до 15 детей, что позволяет уделить внимание каждому юному футболисту</AboutCard></Grid>
            <Grid item xs={8}><AboutCard icon={diary}>Мотивационная система «Дневник футболиста»: После каждой тренировки ребенок получает наклейку в виде золотого либо серебряного мяча. По ходу заполнения дневника юный футболист зарабатывает медали и кубки.</AboutCard></Grid>
            <Grid item xs={4}><AboutCard icon={ball}>Специализированные мячи, разработанные под анатомию стопы детей от 4-х лет, а также разнообразный инвентарь</AboutCard></Grid>
          </Grid>
        </Container>
      </Box>
    </Stack>
  )
};

export default AboutUs;

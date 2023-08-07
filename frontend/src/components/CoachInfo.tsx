import { FC } from "react";
import { ICoach } from "@/types/ICoach";
import { Stack, StackProps, Typography } from "@mui/material";

interface Props extends StackProps {
  coach: ICoach;
}

const CoachInfo: FC<Props> = ({ coach, ...restProps }) => {

  return (
    <Stack spacing={2.5} {...restProps}>
      <Typography fontSize={34} color="typography.main">{coach.type}</Typography>
      <Stack spacing={0.5}>
        <Typography fontSize={24}>{coach.name}</Typography>
        <Typography fontSize={14}>{coach.birth}</Typography>
      </Stack>
      {
        coach.education.length > 0 &&
        <Stack spacing={1}>
          {
            coach.education.map(education => (
              <Typography key={education}>{education}</Typography>
            ))
          }
        </Stack>
      }
      <Typography>Воспитанник Миасского футбола, начал заниматься с {coach.startedPlaying} лет</Typography>
      <Typography>Первый тренер: {coach.firstCoachName}</Typography>
      {
        coach.currentTeam &&
        <Typography>Действующий игрок {coach.currentTeam}</Typography>
      }
      {
        coach.teams.length > 0 &&
        <Stack spacing={1}>
          <Typography>
            {
              coach.teams.length === 1
                ? "Выступал за футбольный клуб:"
                : "Выступал в разные годы за футбольные клубы:"
            }
          </Typography>
          {
            coach.teams.map(team => (
              <Typography key={team} sx={{ marginLeft: "10px !important" }}>- {team}</Typography>
            ))
          }
        </Stack>
      }
      {
        coach.achievements.length > 0 &&
        <Stack spacing={1}>
          <Typography>Достижения: </Typography>
          {
            coach.achievements.map(achievement => (
              <Typography key={achievement} sx={{ marginLeft: "10px !important" }}>- {achievement}</Typography>
            ))
          }
        </Stack>
      }
    </Stack>
  )
};

export default CoachInfo;

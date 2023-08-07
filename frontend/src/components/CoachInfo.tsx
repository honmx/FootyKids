import { ICoach } from "@/types/ICoach";
import { Box, Stack, StackProps, Typography } from "@mui/material";
import { FC } from "react";

interface Props extends StackProps {
  coach: ICoach;
}

const CoachInfo: FC<Props> = ({ coach, ...restProps }) => {
  return (
    <Stack spacing={2} {...restProps}>
      <Typography fontSize={34} color="typography.main">{coach.type}</Typography>
      <Stack spacing={0.5}>
        <Typography fontSize={24}>{coach.name}</Typography>
        <Typography fontSize={14}>{coach.birth}</Typography>
      </Stack>
      {
        coach.education &&
        <Stack spacing={1}>
          {coach.education.map(education => <Typography key={education}>{education}</Typography>)}
        </Stack>
      }
      <Typography>Воспитанник Миасского футбола, начал заниматься с {coach.startedPlaying} лет</Typography>
      <Typography>Воспитанник Миасского футбола, начал заниматься с {coach.startedPlaying} лет</Typography>
      <Typography>Воспитанник Миасского футбола, начал заниматься с {coach.startedPlaying} лет</Typography>
      <Typography>Воспитанник Миасского футбола, начал заниматься с {coach.startedPlaying} лет</Typography>
      <Typography>Воспитанник Миасского футбола, начал заниматься с {coach.startedPlaying} лет</Typography>
      <Typography>Воспитанник Миасского футбола, начал заниматься с {coach.startedPlaying} лет</Typography>
      <Typography>Первый тренер: {coach.firstCoachName}</Typography>
      {
        coach.currentTeam &&
        <Typography>Действующий игрок {coach.currentTeam}</Typography>
      }
      {
        coach.teams &&
        <Stack spacing={1}>
          <Typography>
            {
              coach.teams.length === 1
                ? "Выступал за футбольный клуб:"
                : "Выступал в разные годы за футобльные клубы:"
            }
          </Typography>
          {
            coach.teams.map(team => (
              <Typography key={team} sx={{ marginLeft: "10px !important" }}>- {team}</Typography>)
            )
          }
        </Stack>
      }
    </Stack>
  )
};

export default CoachInfo;

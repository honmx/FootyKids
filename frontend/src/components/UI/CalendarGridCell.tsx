import { DateContext } from "@/contexts/dateContext";
import { GroupContext } from "@/contexts/groupContext";
import { getScheduleIndex } from "@/helpers/getScheduleIndex";
import { Box, Grid, Stack, TableCell, Typography } from "@mui/material";
import Image from "next/image";
import { FC, useContext } from "react";
import DarkForeground from "./DarkForeground";

interface Props {
  date: Date
}

const CalendarGridCell: FC<Props> = ({ date }) => {

  const { group } = useContext(GroupContext);
  const { monthIndex, year } = useContext(DateContext);

  const scheduleIndex = getScheduleIndex(monthIndex, date);
  const training = group.schedule[scheduleIndex].trainingsByDay.find(traning => traning.date === date.toLocaleDateString());

  return (
    <>
      <Grid
        item
        xs={12 / 7}
        sx={{
          position: "relative",
          padding: 0,
          opacity: date.getMonth() === monthIndex ? 1 : 0.5,
          aspectRatio: 1.75
        }}
      >
        {
          training && <>
            <DarkForeground>
              <Image
                src={training.place.photo}
                alt={training.place.name}
                width={100}
                height={50}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </DarkForeground>
            <Stack spacing={0.5} sx={{ position: "absolute", bottom: 5, right: 5 }}>
              <Typography
                sx={{ fontSize: 10, color: training ? "#FFF" : "#000", textAlign: "end" }}
              >
                {training.time}
              </Typography>
              <Typography
                sx={{ fontSize: 10, color: training ? "#FFF" : "#000" }}
              >
                {training.place.name}
              </Typography>
            </Stack>
          </>
        }
        <Typography
          sx={{
            position: "absolute",
            top: 5,
            left: 5,
            color: training ? "#FFF" : "#000",
            fontWeight: training ? 500 : 400
          }}
        >
          {date.getDate()}
        </Typography>
      </Grid>
    </>
  )
};

export default CalendarGridCell;
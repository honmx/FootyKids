import { DateContext } from "@/contexts/dateContext";
import { GroupContext } from "@/contexts/groupContext";
import { daysOfTheWeek } from "@/data/daysOfTheWeek";
import { getCurrentCalendarDates } from "@/helpers/getCurrentCalendarDates";
import { Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import { FC, useContext, useEffect, useState } from "react";
import CalendarGridCell from "../UI/CalendarGridCell";

interface Props {

}

const Calendar: FC<Props> = ({ }) => {

  const { group } = useContext(GroupContext);
  const { monthIndex, year } = useContext(DateContext);

  const [currentCalendarDates, setCurrentCalendarDates] = useState<Date[]>([]);

  useEffect(() => {
    setCurrentCalendarDates(getCurrentCalendarDates(year, monthIndex));
  }, [year, monthIndex]);

  return (
    <Paper>
      <Grid container>
        {
          daysOfTheWeek.map(day => (
            <Grid key={day.dayIndex} item xs={12 / 7} sx={{ textAlign: "center", padding: 0.5, fontWeight: 300 }}>
              <Typography>{day.value}</Typography>
            </Grid>
          ))
        }
        {
          currentCalendarDates.map((date, i) => <CalendarGridCell key={date.toLocaleDateString()} date={date} />)
        }
      </Grid>
    </Paper>
  )
};

export default Calendar;
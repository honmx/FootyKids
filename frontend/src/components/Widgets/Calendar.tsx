import { DateContext } from "@/contexts/dateContext";
import { GroupContext } from "@/contexts/groupContext";
import { daysOfTheWeek } from "@/data/daysOfTheWeek";
import { getCurrentCalendarDates } from "@/helpers/getCurrentCalendarDates";
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";

interface Props {

}

const Calendar: FC<Props> = ({ }) => {

  const { group } = useContext(GroupContext);
  const { monthIndex, year } = useContext(DateContext);

  const [currentCalendarDates, setCurrentCalendarDates] = useState<Date[][]>([]);

  useEffect(() => {
    setCurrentCalendarDates(getCurrentCalendarDates(year, monthIndex));
  }, [year, monthIndex]);

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            {
              daysOfTheWeek.map(day => (
                <TableCell sx={{ textAlign: "center", padding: 0.5, fontWeight: 300 }}>{day.value}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            currentCalendarDates.map(week => (
              <TableRow>
                {
                  week.map(date => {
                    if (date.getMonth() < monthIndex) {
                      return (
                        <TableCell sx={{ padding: 0, opacity: 0.5 }}>
                          {date.getDate()}
                        </TableCell>
                      )
                    }
                    if (date.getMonth() === monthIndex) {
                      return (
                        <TableCell sx={{ padding: 0 }}>
                          {date.getDate()}
                        </TableCell>
                      )
                    }
                    if (date.getMonth() > monthIndex) {
                      return (
                        <TableCell sx={{ padding: 0, opacity: 0.5 }}>
                          {date.getDate()}
                        </TableCell>
                      )
                    }
                  })
                }
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Paper>
  )
};

export default Calendar;
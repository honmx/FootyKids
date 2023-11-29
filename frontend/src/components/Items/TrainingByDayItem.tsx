import { FC, useContext, useEffect, useState } from "react";
import { daysOfTheWeek } from "@/data/daysOfTheWeek";
import { times } from "@/data/times";
import { IPlace } from "@/types/IPlace";
import { Box, BoxProps, IconButton, MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import Image from "next/image";
import crossIcon from "@/assets/cross icon.svg";
import { ITrainingByDay } from "@/types/ITrainingByDay";
import { getCurrentCalendarDates } from "@/helpers/getCurrentCalendarDates";
import { DateContext } from "@/contexts/dateContext";

interface Props extends BoxProps {
  training: ITrainingByDay;
  onChangeTraining: (date: number, time: string, placeId: number) => void;
  places: IPlace[];
}

const TrainingByDayItem: FC<Props> = ({ training, onChangeTraining, places, sx, ...restProps }) => {

  const { year, monthIndex } = useContext(DateContext);

  const [date, setDate] = useState<number>(Number(training.date.slice(0, 2)));
  const [time, setTime] = useState<string>(training.time);
  const [placeId, setPlaceId] = useState<number>(training.place.id);

  const currentCalendarDates = getCurrentCalendarDates(year, monthIndex, false);

  useEffect(() => {
    onChangeTraining(date, time, placeId);
  }, [date, time, placeId]);

  const handleDateChange = (e: SelectChangeEvent<number>) => {
    setDate(Number(e.target.value));
  }

  const handleTimeChange = (e: SelectChangeEvent<string>) => {
    setTime(e.target.value);
  }

  const handlePlaceIdChange = (e: SelectChangeEvent<number>) => {
    setPlaceId(Number(e.target.value));
  }

  return (
    <Box
      sx={{
        transition: "all 0.15s ease",
        paddingTop: 1,
        paddingBottom: 1,
        ...sx
      }}
      {...restProps}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Stack spacing={2} direction="row">
          <Select value={date} onChange={handleDateChange} sx={{ width: "70px" }}>
            {
              currentCalendarDates.map(date => (
                <MenuItem key={date.toLocaleDateString()} value={date.getDate()}>{date.getDate()}</MenuItem>
              ))
            }
          </Select>
          <Select value={time} onChange={handleTimeChange} sx={{ width: "100px" }}>
            {
              times.map(time => (
                <MenuItem key={time} value={time}>{time}</MenuItem>
              ))
            }
          </Select>
          <Select value={placeId} onChange={handlePlaceIdChange}>
            {
              places.map(place => (
                <MenuItem key={place.id} value={place.id}>{place.name}</MenuItem>
              ))
            }
          </Select>
        </Stack>
      </Box>
    </Box>
  )
};

export default TrainingByDayItem;
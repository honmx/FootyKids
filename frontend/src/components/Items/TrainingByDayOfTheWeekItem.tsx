import { FC, useEffect, useState } from "react";
import { daysOfTheWeek } from "@/data/daysOfTheWeek";
import { times } from "@/data/times";
import { useHover } from "@/hooks/useHover";
import { IPlace } from "@/types/IPlace";
import { ITrainingByDayOfTheWeek } from "@/types/ITrainingByDayOfTheWeek";
import { Box, BoxProps, IconButton, MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import Image from "next/image";
import crossIcon from "@/assets/cross icon.svg";

interface Props extends BoxProps {
  training: ITrainingByDayOfTheWeek;
  places: IPlace[];
  onChangeTraining: (trainingId: number, dayOfTheWeek: number, time: string, placeId: number) => void;
  onDeleteTrainingClick: (id: number) => void;
}

const TrainingByDayOfTheWeekItem: FC<Props> = ({ training, places, onChangeTraining, onDeleteTrainingClick, sx, ...restProps }) => {

  const [dayOfTheWeek, setDayOfTheWeek] = useState<number>(training.dayOfTheWeek);
  const [time, setTime] = useState<string>(training.time);
  const [placeId, setPlaceId] = useState<number>(training.place.id);

  const { hoverRef, isHover } = useHover();

  useEffect(() => {
    onChangeTraining(training.id, dayOfTheWeek, time, placeId);
  }, [dayOfTheWeek, time, placeId]);

  const handleDayOfTheWeekChange = (e: SelectChangeEvent<number>) => {
    setDayOfTheWeek(Number(e.target.value));
  }

  const handleTimeChange = (e: SelectChangeEvent<string>) => {
    setTime(e.target.value);
  }

  const handlePlaceIdChange = (e: SelectChangeEvent<number>) => {
    setPlaceId(Number(e.target.value));
  }

  return (
    <Box
      ref={hoverRef}
      sx={{
        backgroundColor: isHover ? "#F8F8F8" : "",
        transition: "all 0.15s ease",
        paddingTop: 1,
        paddingBottom: 1,
        ...sx
      }}
      {...restProps}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Stack spacing={2} direction="row">
          <Select value={dayOfTheWeek} onChange={handleDayOfTheWeekChange} sx={{ width: "70px" }}>
            {
              daysOfTheWeek.map(day => (
                <MenuItem key={day.dayIndex} value={day.dayIndex}>{day.value}</MenuItem>
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
        {
          isHover &&
          <IconButton color="black" onClick={() => onDeleteTrainingClick(training.id)}>
            <Image src={crossIcon} alt="cross icon" width={10} height={10} />
          </IconButton>
        }
      </Box>
    </Box>
  )
};

export default TrainingByDayOfTheWeekItem;
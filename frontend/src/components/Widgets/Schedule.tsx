import { FC, useState } from "react";
import PickDateSelectsGroup from "./PickDateSelectsGroup";
import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import smallPlusIcon from "@/assets/small plus icon.svg";
import Calendar from "./Calendar";
import { DateContext } from "@/contexts/dateContext";

interface Props {

}

const Schedule: FC<Props> = ({ }) => {

  const [monthIndex, setMonthIndex] = useState<number>(Number(new Date().toLocaleDateString().slice(3, 5)) - 1);
  const [year, setYear] = useState<number>(Number(new Date().toLocaleDateString().slice(6)));

  return (
    <>
      <DateContext.Provider value={{ monthIndex, setMonthIndex, year, setYear }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <PickDateSelectsGroup />
          <Stack spacing={1} direction="row">
            <Button>
              {/* <Image src={smallPlusIcon} alt="plus icon" width={10} height={10} style={{ marginRight: 5 }} /> */}
              Добавить тренировку
            </Button>
            <Button>
              {/* <Image src={smallPlusIcon} alt="plus icon" width={10} height={10} style={{ marginRight: 5 }} /> */}
              Изменить расписание
            </Button>
          </Stack>
        </Box>
        <Calendar />
      </DateContext.Provider>
    </>
  )
};

export default Schedule;
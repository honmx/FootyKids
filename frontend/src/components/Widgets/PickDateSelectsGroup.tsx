import { ChangeEvent, FC, useEffect, useState } from "react";
import { Box, MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import { months } from "@/data/months";
import Dropdown from "../UI/Dropdown";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import { years } from "@/data/years";
import arrowDown from "@/assets/arrow down.svg";
import Image from "next/image";

interface Props {

}

const PickDateSelectsGroup: FC<Props> = ({ }) => {

  const [monthIndex, setMonthIndex] = useState<number>(Number(new Date().toLocaleDateString().slice(3, 5)) - 1);
  const [year, setYear] = useState<number>(Number(new Date().toLocaleDateString().slice(6)));

  const handleMonthChange = (e: SelectChangeEvent<number>) => {
    setMonthIndex(Number(e.target.value));
  }

  return (
    <Stack spacing={2} direction="row">
      <Select
        value={monthIndex}
        onChange={handleMonthChange}
        sx={{ width: "140px", position: "relative" }}
      >
        {
          months.slice(6).map(month => (
            <MenuItem key={month.monthIndex} value={month.monthIndex}>{month.value}</MenuItem>
          ))
        }
      </Select>
      <Select>
        <MenuItem>option 1</MenuItem>
        <MenuItem>option 2</MenuItem>
      </Select>
    </Stack>
  )
};

export default PickDateSelectsGroup;
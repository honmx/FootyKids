import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { Box, MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import { months } from "@/data/months";
import Dropdown from "../UI/Dropdown";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import { years } from "@/data/years";
import arrowDown from "@/assets/arrow down.svg";
import Image from "next/image";
import { DateContext } from "@/contexts/dateContext";
import groupsService from "@/services/groupsService";
import { GroupContext } from "@/contexts/groupContext";

interface Props {

}

const PickDateSelectsGroup: FC<Props> = ({ }) => {

  const { group, setGroup } = useContext(GroupContext);
  const { monthIndex, setMonthIndex, year, setYear } = useContext(DateContext);

  const handleMonthChange = (e: SelectChangeEvent<number>) => {
    setMonthIndex(Number(e.target.value));
  }

  const handleYearChange = (e: SelectChangeEvent<number>) => {
    setYear(Number(e.target.value));
  }

  useEffect(() => {
    (async () => {
      const newSchedule = await groupsService.getCurrentSchedule(group.id, monthIndex + 1, year);

      if (!newSchedule) return;

      setGroup({ ...group, schedule: newSchedule });
    })()
  }, [year, monthIndex]);

  return (
    <Stack spacing={1} direction="row">
      <Select
        value={monthIndex}
        onChange={handleMonthChange}
        sx={{ width: "140px", position: "relative" }}
      >
        {
          months.map(month => (
            <MenuItem key={month.monthIndex} value={month.monthIndex}>{month.value}</MenuItem>
          ))
        }
      </Select>
      <Select
        value={year}
        onChange={handleYearChange}
        sx={{ width: "140px", position: "relative" }}
      >
        {
          years.map(year => (
            <MenuItem key={year} value={year}>{year}</MenuItem>
          ))
        }
      </Select>
    </Stack >
  )
};

export default PickDateSelectsGroup;
import { ChangeEvent, FC, useEffect, useState } from "react";
import { IChild } from "@/types/IChild";
import { Box, FormControlLabel, Radio, RadioGroup, Stack, StackProps, Typography } from "@mui/material";
import Image from "next/image";
import userPhoto from "@/assets/user.jpg";
import { AttendanceType } from "@/types/AttendanceType";
import { arrayOfAttendanceVariants } from "@/helpers/arrayOfAttendanceVariants";
import Avatar from "../UI/Avatar";
import { getNameAndSurname } from "@/helpers/getNameAndSurname";

interface Props extends StackProps {
  user: IChild;
  handleMarkAttendanceItemChange: (id: number, attendance: AttendanceType) => void;
}

const UserMarkAttendanceItem: FC<Props> = ({ user, handleMarkAttendanceItemChange, sx, ...restProps }) => {

  const [value, setValue] = useState<AttendanceType | null>(null);

  const attendanceVariants = arrayOfAttendanceVariants(["П", "УП", "НП", "Б"]);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as AttendanceType);
  }

  useEffect(() => {
    if (!value) return;

    handleMarkAttendanceItemChange(user.id, value);
  }, [value]);

  return (
    <Stack
      direction="row"
      spacing={7.5}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 1,
        paddingBottom: 1,
        ...sx
      }}
      {...restProps}
    >
      <Stack spacing={1} direction="row" sx={{ alignItems: "center" }}>
        <Avatar photo={user.photo} />
        <Box>
          <Typography>{getNameAndSurname(user.name)}</Typography>
          <Typography fontSize={12}>{user.birth}</Typography>
        </Box>
      </Stack>
      <Box>
        <RadioGroup row value={value} onChange={handleValueChange}>
          {
            attendanceVariants.map(attendance => (
              <FormControlLabel
                key={attendance}
                value={attendance}
                control={<Radio size="small" />}
                label={attendance}
                labelPlacement="top"
              />
            ))
          }
        </RadioGroup>
      </Box>
    </Stack>
  )
};

export default UserMarkAttendanceItem;
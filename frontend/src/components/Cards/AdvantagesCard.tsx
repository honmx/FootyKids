import { Paper, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  accentText: string;
  usualText: string;
}

const AdvantagesCard: FC<Props> = ({ accentText, usualText }) => {
  return (
    <Paper
      sx={{
        backgroundColor: "primary.main",
        padding: "10px 20px"
      }}>
      <Typography textAlign="center" color="typography.light" fontSize={34} fontWeight={700}>{accentText}</Typography>
      <Typography textAlign="center" color="typography.light" fontSize={20} fontWeight={500}>{usualText}</Typography>
    </Paper>
  )
};

export default AdvantagesCard;

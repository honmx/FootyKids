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
        maxWidth: {
          smallPhone: "160px",
          tablet: "none"
        },
        minWidth: {
          smallPhone: "120px",
          largePhone: "130px",
          tablet: "150px"
        },
        backgroundColor: "primary.main",
        padding: {
          smallPhone: "10px",
          largePhone: "10px 20px"
        }
      }}>
      <Typography
        textAlign="center"
        color="typography.light"
        fontSize={{
          smallPhone: 26,
          tablet: 34
        }}
        fontWeight={700}
      >
        {accentText}
      </Typography>
      <Typography
        textAlign="center"
        color="typography.light"
        fontSize={{
          smallPhone: 14,
          largePhone: 18,
          tablet: 20
        }}
        fontWeight={500}
      >
        {usualText}
      </Typography>
    </Paper>
  )
};

export default AdvantagesCard;

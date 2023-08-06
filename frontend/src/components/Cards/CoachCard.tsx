import { FC } from "react";
import { ICoach } from "@/types/ICoach";
import { Box, Button, Paper, Typography } from "@mui/material";
import Image from "next/image";
import coachIcon from "@/assets/coach icon.svg";

interface Props {
  coach: ICoach;
}

const CoachCard: FC<Props> = ({ coach }) => {
  return (
    <Paper
      sx={{
        minWidth: "260px",
        maxWidth: "260px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Box sx={{ height: "330px" }}>
        <Image
          src={coach.photo ? coach.photo : coachIcon}
          alt={coach.name}
          width={1080}
          height={1920}
          style={{
            height: "100%",
            objectFit: "cover",
            filter: coach.photo ? "none" : "invert(50%)"
          }}
        />
      </Box>
      <Typography
        fontWeight={300}
        textAlign="center"
        lineHeight={1.75}
      >
        {coach.name.split(" ").slice(0, 2).join(" ")}
      </Typography>
      <Button
        fullWidth
        sx={{
          borderRadius: "0px",
          textTransform: "capitalize",
          fontWeight: 300,
          "&:hover": {
            backgroundColor: "secondary.light"
          }
        }}
      >
        Посмотреть
      </Button>
    </Paper>
  )
};

export default CoachCard;

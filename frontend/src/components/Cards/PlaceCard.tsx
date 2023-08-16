import { IPlace } from "@/types/IPlace";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import DarkForeground from "../UI/DarkForeground";

interface Props {
  place: IPlace;
}

const PlaceCard: FC<Props> = ({ place }) => {
  return (
    <Paper>
      <Image
        src={place.photo}
        alt={place.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover"
        }}
      />
      <Box sx={{ padding: 2 }}>
        <Typography>{place.name}</Typography>
        <Typography>{place.address}</Typography>
      </Box>
    </Paper>
  )
};

export default PlaceCard;

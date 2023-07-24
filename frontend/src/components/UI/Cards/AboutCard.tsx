import { FC, ReactNode } from "react";
import { Box, BoxProps, Paper, Typography } from "@mui/material";
import Image from "next/image";

interface Props extends BoxProps {
  icon?: string;
  children: ReactNode;
}

const AboutCard: FC<Props> = ({ icon, children, ...restProps }) => {
  return (
    <Box {...restProps} sx={{
      position: "relative",
      height: "100%"
    }}>
      {
        icon &&
        <Box sx={{
          position: "absolute",
          top: "-15px",
          left: "-15px"
        }}>
          <Image src={icon} alt="icon" />
        </Box>
      }
      <Paper elevation={10} sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px 40px",
        height: "100%"
      }}>
        <Typography
          fontSize={20}
          fontWeight={300}
          lineHeight={1}
          textAlign="center"
        >
          {children}
        </Typography>
      </Paper>
    </Box>
  )
};

export default AboutCard;


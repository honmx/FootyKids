import { FC, ReactNode } from "react";
import { Box, BoxProps, Paper, Typography } from "@mui/material";

interface Props extends BoxProps {
  count?: string;
  children: ReactNode;
}

const PurposeCard: FC<Props> = ({ count, children, ...restProps }) => {
  return (
    <Box {...restProps} sx={{
      position: "relative",
      maxWidth: "250px"
    }}>
      {
        count &&
        <Box sx={{
          position: "relative",
          top: "30px",
          right: "25px"
        }}>
          <Typography
            fontSize={50}
            fontWeight={700}
            lineHeight={1}
            color="sheet.main"
            sx={{
              textShadow: "0 0 2px #000"
            }}
          >
            {count}
          </Typography>
        </Box>
      }
      <Paper elevation={10} sx={{
        padding: "15px 40px"
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

export default PurposeCard;

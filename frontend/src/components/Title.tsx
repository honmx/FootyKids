import { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import leftSide from "@/assets/title-left-side-bg.svg";
import rightSide from "@/assets/title-right-side-bg.svg";
import Image from "next/image";

interface Props {
  type?: "main" | "regular"
  children: ReactNode;
}

const Title: FC<Props> = ({ type="regular", children }) => {
  return (
    <Box sx={{
      display: "flex",
      alignSelf: "flex-start",
      position: "relative"
    }}>
      <Box sx={{
        zIndex: 10
      }}>
        {children}
      </Box>
      <Box sx={{
        position: "absolute",
        display: "flex",
        width: type === "main" ? "120%" : "150%",
        height: "100%",
        ml: type === "main" ? "-12%" : "-20%",
        mr: "-13%",
      }}>
        <Image src={leftSide} alt="left side" style={{ height: "100%", width: "auto" }} />
        <Box sx={{
          flex: "1 1 0",
          backgroundColor: "primary.main"
        }} />
        <Image src={rightSide} alt="right side" style={{ height: "100%", width: "auto" }} />
      </Box>
    </Box>
  )
};

export default Title;

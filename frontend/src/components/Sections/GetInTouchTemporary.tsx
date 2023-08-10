import { FC } from "react";
import SectionWrapper from "../Wrappers/SectionWrapper";
import bg from "@/assets/get-in-touch-bg.jpg";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import DarkForeground from "../UI/DarkForeground";

interface Props {

}

const GetInTouchTemporary: FC<Props> = ({ }) => {
  return (
    <SectionWrapper title="Записаться">
      <Box sx={{ maxHeight: "min(700px, 100vh)", overflow: "hidden", position: "relative" }}>
        <DarkForeground>
          <Image
            src={bg}
            alt="background photo"
            priority
            style={{ height: "100%", aspectRatio: 2, objectFit: "cover" }}
          />
        </DarkForeground>
        <Container sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}>
          <Stack spacing={2}>
            <Typography color="typography.light" fontSize={50} fontWeight={500} textAlign="center">Запишитесь на бесплатное пробное занятие</Typography>
            <Typography color="typography.light" fontSize={26} fontWeight={500} textAlign="center">+7-900-000-00-00</Typography>
          </Stack>
        </Container>
      </Box>
    </SectionWrapper>
  )
};

export default GetInTouchTemporary;

import { FC } from "react";
import Image from "next/image";
import { Box, Button, Container, Paper, Stack, TextField, Typography } from "@mui/material";
import { useForm, Controller, SubmitHandler, Control } from "react-hook-form";
import * as yup from "yup";
import { InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SectionWrapper from "../Wrappers/SectionWrapper";
import ControlledTextField from "../UI/ControlledTextField";
import DarkForeground from "../UI/DarkForeground";
import photo from "@/assets/get-in-touch-photo.jpg";

const applicationSchema = yup
  .object({
    parentName: yup.string().required(),
    childName: yup.string().required(),
    childBirth: yup.string().matches(/^\d\d.\d\d.\d\d\d\d$/).required(),
    phone: yup.string().min(10).max(10).required(),
  })
  .required();

interface IFormInput extends InferType<typeof applicationSchema> {}

interface Props {

}

const GetInTouch: FC<Props> = ({ }) => {

  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      parentName: "",
      childName: "",
      childBirth: "",
      phone: "",
    },
    resolver: yupResolver(applicationSchema)
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  }

  return (
    <SectionWrapper title="Записаться">
      <Box>
        <Container>
          <Stack spacing={2}>
            <Typography>Запишитесь на бесплатное пробное занятие</Typography>
            <Typography>Оставьте заявку и мы добавим Вас в группу в Viber</Typography>
            <Paper sx={{ display: "flex" }}>
              <Box sx={{ width: "50%" }}>
                <DarkForeground>
                  <Image src={photo} alt="child photo" />
                </DarkForeground>
              </Box>
              <Box sx={{ width: "50%", padding: 3 }}>
                <form
                  style={{ display: "flex", flexDirection: "column", height: "100%" }}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Stack spacing={1.5} sx={{ flex: "1 1 0" }}>
                    <ControlledTextField
                      control={control}
                      name="parentName"
                      label="ФИО родителя"
                      fullWidth
                    />
                    <ControlledTextField
                      control={control}
                      name="childName"
                      label="ФИО ребенка"
                      fullWidth
                    />
                    <ControlledTextField
                      control={control}
                      name="childBirth"
                      label="Дата рождения ребенка (ДД.ММ.ГГГГ)"
                      fullWidth
                    />
                    <ControlledTextField
                      control={control}
                      name="phone"
                      label="Телефон"
                      fullWidth
                    />
                  </Stack>
                  <Button type="submit" variant="contained">Записаться</Button>
                </form>
              </Box>
            </Paper>
          </Stack>
        </Container>
      </Box>
    </SectionWrapper>
  )
};

export default GetInTouch;

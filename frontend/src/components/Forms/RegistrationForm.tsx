import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
import { FC, SyntheticEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { InferType } from "yup";
import ControlledTextField from "../UI/ControlledTextField";
import CustomLink from "../UI/CustomLink";

interface Props {
  onLoginClick: () => void;
}

const RegistrationForm: FC<Props> = ({ onLoginClick }) => {

  const [tabsIndex, setTabsIndex] = useState<number>(0);

  const handleTabIndexChange = (e: SyntheticEvent, newValue: number) => {
    setTabsIndex(newValue);
  }

  return (
    <Paper sx={{ padding: 2.5, paddingTop: 1 }}>
      <Tabs value={tabsIndex} onChange={handleTabIndexChange} sx={{ marginBottom: "15px" }}>
        <Tab label="Ребенок" disableRipple />
        <Tab label="Тренер" disableRipple />
      </Tabs>
      {
        tabsIndex === 0
          ? <UserRegistrationForm />
          : <>coach register</>
      }
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        gap: "5px",
        marginTop: 0.5,
        marginBottom: -1.5
      }}>
        <Typography fontSize={14}>Уже есть аккаунт?</Typography>
        <CustomLink
          fontSize={14}
          component={"button" as unknown as "a"}
          underline="none"
          onClick={onLoginClick}
        >
          Войти
        </CustomLink>
      </Box>
    </Paper >
  )
};

// ==========================

const userRegistrationSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    passwordAgain: yup.string().min(8).required(),
  })
  .required();

interface IUserRegistrationFormInput extends InferType<typeof userRegistrationSchema> { }

const UserRegistrationForm: FC = ({ }) => {

  const { control, handleSubmit, setError } = useForm<IUserRegistrationFormInput>({
    defaultValues: {
      email: "",
      password: "",
      passwordAgain: "",
    },
    resolver: yupResolver(userRegistrationSchema)
  });

  const onSubmit: SubmitHandler<IUserRegistrationFormInput> = (data) => {
    if (data.password !== data.passwordAgain) {
      setError("password", { type: "value", message: "Пароли не совпадают" });
      setError("passwordAgain", { type: "value", message: "Пароли не совпадают" });
      return;
    }

    // send request
  }

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={1.5}>
        <ControlledTextField
          control={control}
          name="email"
          label="Почта"
          fullWidth
        />
        <ControlledTextField
          control={control}
          name="password"
          label="Пароль"
          fullWidth
        />
        <ControlledTextField
          control={control}
          name="passwordAgain"
          label="Повторите пароль"
          fullWidth
        />
      </Stack>
      <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>Зарегистрироваться</Button>
    </form>
  );
}

export default RegistrationForm;
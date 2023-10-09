import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
import { FC, SyntheticEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { InferType } from "yup";
import ControlledTextField from "../UI/ControlledTextField";
import CustomLink from "../UI/CustomLink";

const newPasswordSchema = yup
  .object({
    password: yup.string().min(8).required(),
    passwordAgain: yup.string().min(8).required()
  })
  .required();

interface IUserNewPasswordFormInput extends InferType<typeof newPasswordSchema> { }

interface Props {
  onContinueClick: () => void;
}

const NewPasswordForm: FC<Props> = ({ onContinueClick }) => {

  const { control, handleSubmit, setError } = useForm<IUserNewPasswordFormInput>({
    defaultValues: {
      password: "",
      passwordAgain: "",
    },
    resolver: yupResolver(newPasswordSchema)
  });

  const onSubmit: SubmitHandler<IUserNewPasswordFormInput> = (data) => {
    if (data.password !== data.passwordAgain) {
      setError("password", { type: "value", message: "Пароли не совпадают" });
      setError("passwordAgain", { type: "value", message: "Пароли не совпадают" });
      return;
    }

    console.log(data);
    onContinueClick();
    // send request
  }

  return (
    <Paper sx={{ padding: 2.5 }}>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={1.5}>
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
        <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>Войти</Button>
      </form>
    </Paper>
  )
};

export default NewPasswordForm;
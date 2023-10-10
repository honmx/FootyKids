import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Paper, Stack } from "@mui/material";
import { FC, useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { InferType } from "yup";
import ControlledTextField from "../UI/ControlledTextField";
import { PasswordRecoveryContext } from "@/contexts/passwordRecoveryContext";

const sendCodeToEmailSchema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

interface ISendCodeToEmailFormInput extends InferType<typeof sendCodeToEmailSchema> { }


interface Props {
  onContinueClick: () => void;
}

const SendCodeToEmailForm: FC<Props> = ({ onContinueClick }) => {

  const { control, handleSubmit } = useForm<ISendCodeToEmailFormInput>({
    defaultValues: {
      email: ""
    },
    resolver: yupResolver(sendCodeToEmailSchema)
  });

  const { setPasswordRecoveryData } = useContext(PasswordRecoveryContext);

  const onSubmit: SubmitHandler<ISendCodeToEmailFormInput> = async (data) => {
    setPasswordRecoveryData(data);

    try {
      
      onContinueClick();
    } catch (error) {

    }
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
            name="email"
            label="Почта"
            fullWidth
          />
        </Stack>
        <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>Продолжить</Button>
      </form>
    </Paper>
  )
};

export default SendCodeToEmailForm;
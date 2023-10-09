import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Paper, Stack } from "@mui/material";
import { FC, useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { InferType } from "yup";
import ControlledTextField from "../UI/ControlledTextField";
import { PasswordRecoveryContext } from "@/contexts/passwordRecoveryContext";

const validateCodeSchema = yup
  .object({
    code: yup.string().min(4).max(4).matches(/^\d\d\d\d$/).required(),
  })
  .required();

interface ValidateCodeFormInput extends InferType<typeof validateCodeSchema> { }


interface Props {
  onContinueClick: () => void;
}

const ValidateCodeForm: FC<Props> = ({ onContinueClick }) => {

  const { control, handleSubmit } = useForm<ValidateCodeFormInput>({
    defaultValues: {
      code: ""
    },
    resolver: yupResolver(validateCodeSchema)
  });

  const { email } = useContext(PasswordRecoveryContext);

  const onSubmit: SubmitHandler<ValidateCodeFormInput> = (data) => {
    // send request
    console.log({
      email,
      code: data.code
    });
    onContinueClick();
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
            name="code"
            label="Код"
            fullWidth
          />
        </Stack>
        <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>Продолжить</Button>
      </form>
    </Paper>
  )
};

export default ValidateCodeForm;
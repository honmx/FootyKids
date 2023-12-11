import { FC, useContext, useEffect, useState } from "react";
import * as yup from "yup";
import { InferType } from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ControlledTextField from "../UI/ControlledTextField";
import { Button } from "@mui/material";
import groupsService from "@/services/groupsService";
import { GroupContext } from "@/contexts/groupContext";

const applicationSchema = yup
  .object({
    groupName: yup.string().required()
  })
  .required();

interface IFormInput extends InferType<typeof applicationSchema> { }

interface Props {
  groupName: string;
  handleCloseClick: () => void;
}

const ChangeGroupNameForm: FC<Props> = ({ groupName, handleCloseClick }) => {

  const { groupFromContext, setGroupFromContext } = useContext(GroupContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { control, setValue, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      groupName
    },
    resolver: yupResolver(applicationSchema)
  });

  useEffect(() => {
    setValue("groupName", groupName);
  }, []);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (data.groupName !== groupName) {
      setIsLoading(true);
      const groupWithNewName = await groupsService.changeGroupName(groupFromContext.id, data.groupName);

      if (!groupWithNewName) return;
      
      setGroupFromContext({ ...groupFromContext, name: groupWithNewName.name });
    }

    setIsLoading(false);

    handleCloseClick();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column" }}>
      <ControlledTextField
        control={control}
        name="groupName"
        sx={{ paddingBottom: 2, minWidth: "290px" }}
      />
      <Button type="submit" disabled={isLoading}>Применить</Button>
    </form>
  )
};

export default ChangeGroupNameForm;
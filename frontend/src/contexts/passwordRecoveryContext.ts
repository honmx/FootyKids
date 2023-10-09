import { Dispatch, SetStateAction, createContext } from "react";

interface IDefaultProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

export const PasswordRecoveryContext = createContext<IDefaultProps>({
  email: "",
  setEmail: () => {}
}); 
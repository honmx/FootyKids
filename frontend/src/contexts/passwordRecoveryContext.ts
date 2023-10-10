import { Dispatch, SetStateAction, createContext } from "react";

interface IPasswordRecoveryContext {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

export const PasswordRecoveryContext = createContext<IPasswordRecoveryContext>({
  email: "",
  setEmail: () => {}
});
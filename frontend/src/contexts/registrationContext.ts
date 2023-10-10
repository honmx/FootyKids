import { Dispatch, SetStateAction, createContext } from "react";

export interface IRegistrationData {
  email: string;
  password: string;
}

interface IRegistrationContext {
  registrationData: IRegistrationData;
  setRegistrationData: Dispatch<SetStateAction<IRegistrationData>>;
}

export const RegistrationContext = createContext<IRegistrationContext>({
  registrationData: {
    email: "",
    password: ""
  },
  setRegistrationData: () => {}
});
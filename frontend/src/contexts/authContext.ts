import { IUser } from "@/types/IUser";
import { Dispatch, SetStateAction, createContext } from "react";

interface IAuthContext {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: () => {}
});
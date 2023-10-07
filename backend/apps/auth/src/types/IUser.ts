import { IRole } from "./IRole";

export interface IUser {
  id: number;
  email: string;
  passowrd: string;
  role: IRole;
}
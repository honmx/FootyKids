import { IRole } from "./IRole";

export interface IUserCoach {
  id: number;
  email: string;
  passowrd: string;
  role: IRole;
}
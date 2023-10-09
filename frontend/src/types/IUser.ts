export interface IUser {
  id: number;
  email: string;
  password: string;
  role: {
    id: number;
    value: string;
  }
}
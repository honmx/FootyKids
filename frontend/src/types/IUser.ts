export interface IUser {
  id: number;
  name: string;
  parentName: string | null;
  birth: string | null;
  email: string;
  phone: string | null;
  password: string;
  role: {
    id: number;
    value: string;
  }
}
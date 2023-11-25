export interface IUser {
  id: number;
  type: "user" | "coach";
  name: string;
  parentName: string | null;
  birth: string | null;
  photo: string | null;
  email: string;
  phone: string | null;
  password: string;
  role: {
    id: number;
    value: string;
  } | null
}
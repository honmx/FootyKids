import { $authAPI } from "@/http/authAxios";
import { IAuthResponse } from "@/types/IAuthResponse";
import { IUser } from "@/types/IUser";

interface LoginProps {
  email: string;
  password: string;
}

const login = async (loginProps: LoginProps): Promise<IAuthResponse> => {
  const { data: user } = await $authAPI.post<IAuthResponse>("/login", loginProps);
  return user;
}

interface RegisterProps {
  email: string;
  password: string;
}

const register = async (registerProps: RegisterProps): Promise<IAuthResponse> => {
  const { data: user } = await $authAPI.post<IAuthResponse>("/register", registerProps);
  return user;
}

const sendCode = async (email: string) => {
  await $authAPI.post("/sendVerificationCode", { email });
}

const validateCode = async (email: string, code: number) => {
  await $authAPI.post("/validateVerificationCode", { email, code });
}

const validateRefreshToken = async (): Promise<IUser | undefined> => {
  try {
    const { data: user } = await $authAPI.get<IUser>("/validateRefreshToken");
    return user;
  } catch (error) { }
}

export default {
  login,
  register,
  sendCode,
  validateCode,
  validateRefreshToken
}
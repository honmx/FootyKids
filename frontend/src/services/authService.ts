import { $authAPI } from "@/http/authAxios";
import { IAuthResponse } from "@/types/IAuthResponse";
import { IUser } from "@/types/IUser";

interface LoginProps {
  email: string;
  password: string;
}

const login = async (loginProps: LoginProps): Promise<IAuthResponse> => {
  const { data: user } = await $authAPI.post<IAuthResponse>("/login", loginProps);
  localStorage.setItem("token", user.accessToken);
  return user;
}

interface RegisterProps {
  name?: string;
  parentName?: string | null;
  birth?: string | null;
  email: string;
  phone?: string | null;
  password: string;
}

const register = async (registerProps: RegisterProps): Promise<IAuthResponse> => {
  const { data: user } = await $authAPI.post<IAuthResponse>("/register", registerProps);
  localStorage.setItem("token", user.accessToken);
  return user;
}

const registerCoach = async (registerProps: RegisterProps): Promise<IAuthResponse> => {
  const { data: user } = await $authAPI.post<IAuthResponse>("/registerCoach", registerProps);
  localStorage.setItem("token", user.accessToken);
  return user;
}

interface RecoverPasswordProps {
  email: string;
  password: string;
}

const recoverPassword = async (recoverPasswordProps: RecoverPasswordProps): Promise<IUser> => {
  const { data: user } = await $authAPI.put<IUser>("/recoverPassword", recoverPasswordProps);
  return user;
}

const sendCode = async (email: string) => {
  await $authAPI.post("/sendVerificationCode", { email });
}
interface ValidateCodeProps {
  email: string;
  code: number;
}

const validateCode = async ({ email, code }: ValidateCodeProps) => {
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
  registerCoach,
  recoverPassword,
  sendCode,
  validateCode,
  validateRefreshToken
}
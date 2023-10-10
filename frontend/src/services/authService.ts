import { $authAPI } from "@/http/authAxios";
import { IAuthResponse } from "@/types/IAuthResponse";
import { IUser } from "@/types/IUser";

const login = async (email: string, password: string): Promise<IAuthResponse> => {
  const { data: user } = await $authAPI.post("/login", { email, password });
  return user;
}

const validateRefreshToken = async (): Promise<IUser | undefined> => {
  try {
    const { data: user } = await $authAPI.get<IUser>("/validateRefreshToken");
    return user;
  } catch (error) {
    console.log(error);
  }
}

export default {
  login,
  validateRefreshToken
}
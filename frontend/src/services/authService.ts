import { $authAPI } from "@/http/authAxios";

const validateRefreshToken = async (refreshToken: string) => {
  try {
    const { data: user } = await $authAPI.get("validateRefreshToken", { data: { refreshToken } });
    return user;
  } catch (error) {
    console.log(error);
  }
}

export default {
  validateRefreshToken
}
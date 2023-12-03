import { $usersAPI } from "@/http/usersAxios"
import { IChild } from "@/types/IChild"

const getUsersWithoutGroup = async () => {
  try {
    const { data: users } = await $usersAPI.get<Pick<IChild, "id" | "name" | "photo" | "birth">[]>("/withoutGroup");
    return users;
    
  } catch (error) {
    console.log(error);
  }
}

export default {
  getUsersWithoutGroup,
}
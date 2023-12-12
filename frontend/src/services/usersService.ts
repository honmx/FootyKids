import { $usersAPI } from "@/http/usersAxios"
import { IChild } from "@/types/IChild"
import { UserType } from "@/types/UserType";

const getAllUsers = async () => {
  try {
    const { data: users } = await $usersAPI.get<UserType[]>(`/`);
    return users;

  } catch (error) {
    console.log(error);
  }
}

const getUsersWithoutGroup = async () => {
  try {
    const { data: users } = await $usersAPI.get<IChild[]>("/withoutGroup");
    return users;

  } catch (error) {
    console.log(error);
  }
}

const expelChild = async (userId: number) => {
  try {
    const { data: expelledChild } = await $usersAPI.patch<IChild>(`/${userId}/removeGroup`);
    return expelledChild;

  } catch (error) {
    console.log(error);
  }
}

const changeGroup = async (userId: number, groupId: number) => {
  try {
    const { data: user } = await $usersAPI.patch<IChild>(`/${userId}/changeGroup`, { groupId });
    return user;

  } catch (error) {
    console.log(error);
  }
}

export default {
  getAllUsers,
  getUsersWithoutGroup,
  expelChild,
  changeGroup
}
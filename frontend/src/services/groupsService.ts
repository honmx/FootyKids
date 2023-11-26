import { $groupsAPI } from "@/http/groupsAxios"
import { IGroup } from "@/types/IGroup";

const getGroups = async () => {
  try {
    const { data: groups } = await $groupsAPI.get<IGroup[]>("/");
    return groups;

  } catch (error) {
    console.log(error);
  }
}

const getGroupByName = async (groupName: string) => {
  try {
    const { data: group } = await $groupsAPI.get<IGroup>(`/group/${groupName}`);
    return group;

  } catch (error) {
    console.log(error);
  }
}

const getGroupById = async (groupId: number) => {
  try {
    const { data: group } = await $groupsAPI.get<IGroup>(`/${groupId}`);
    return group;

  } catch (error) {
    console.log(error);
  }
}

const changeGroupName = async (groupId: number, groupName: string) => {
  try {
    const { data: groupWithNewName } = await $groupsAPI.patch<IGroup>(`/${groupId}/changeName`, { name: groupName });
    return groupWithNewName;

  } catch (error) {
    console.log(error);
  }
}

export default {
  getGroups,
  getGroupByName,
  getGroupById,
  changeGroupName,
}
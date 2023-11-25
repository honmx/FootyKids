import { $groupsAPI } from "@/http/groupsAxios"
import { IGroup } from "@/types/IGroup";

const getGroups = async (): Promise<IGroup[] | undefined> => {
  try {
    const { data: groups } = await $groupsAPI.get("/");
    return groups; 

  } catch (error) {
    console.log(error);
  }
}

const getGroupByName = async (groupName: string): Promise<IGroup | undefined> => {
  try {
    const { data: group } = await $groupsAPI.get(`/group/${groupName}`);
    return group; 

  } catch (error) {
    console.log(error);
  }
}

export default {
  getGroups,
  getGroupByName,
}
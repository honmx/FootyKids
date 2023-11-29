import { $groupsAPI } from "@/http/groupsAxios"
import { IGroup } from "@/types/IGroup";
import { IRequestTrainingByDayOfTheWeek } from "@/types/IRequestTrainingByDayOfTheWeek";
import { ISchedule } from "@/types/ISchedule";

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

const getCurrentSchedule = async (groupId: number, month: number, year: number) => {
  try {
    const { data: schedule } = await $groupsAPI.get<ISchedule[]>(`/${groupId}/getCurrentSchedule/${year}/${month}`);
    return schedule;

  } catch (error) {
    console.log(error);
  }
}

const createSchedule = async (groupId: number, date: string, trainingsByDayOfTheWeek: IRequestTrainingByDayOfTheWeek[]) => {
  try {
    const { data: schedule } = await $groupsAPI.patch<ISchedule[]>(`/${groupId}/createSchedule`, { date, trainingsByDayOfTheWeek });
    return schedule;

  } catch (error) {
    console.log(error);
  }
}

const changeTraining = async (groupId: number, id: number, date: string, time: string, placeId: number) => {
  const { data: schedule } = await $groupsAPI.patch<ISchedule[]>(`/${groupId}/changeTraining`, { id, date, time, placeId });
  return schedule;
}

const deleteTraining = async (groupId: number, date: string) => {
  try {
    const { data: schedule } = await $groupsAPI.delete<ISchedule[]>(`/${groupId}/deleteTraining/${date}`);
    return schedule;

  } catch (error) {
    console.log(error);
  }
}

export default {
  getGroups,
  getGroupByName,
  getGroupById,
  changeGroupName,
  getCurrentSchedule,
  createSchedule,
  changeTraining,
  deleteTraining,
}
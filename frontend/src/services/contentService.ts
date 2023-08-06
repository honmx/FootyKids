import { $contentAPI } from "@/http/contentAxios"
import { ICoach } from "@/types/ICoach";

const getCoaches = async (): Promise<ICoach[] | undefined> => {
  try {
    const { data: coaches } = await $contentAPI.get<ICoach[]>("/coaches");
    return coaches;

  } catch (error) {
    console.log(error);
  }
}

export default {
  getCoaches
}
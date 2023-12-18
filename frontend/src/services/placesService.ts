import { $placesAPI } from "@/http/placesAxios"
import { IPlace } from "@/types/IPlace"

const getPlaces = async () => {
  const { data: places } = await $placesAPI.get<IPlace[]>("/");
  return places;
}

export default {
  getPlaces,
}
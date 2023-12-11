import { $placesAPI } from "@/http/placesAxios"
import { IPlace } from "@/types/IPlace"

const getPlaces = async () => {
  try {
    const {data: places} = await $placesAPI.get<IPlace[]>("/");
    return places;
    
  } catch (error) {
    console.log(error);
  }
}

export default {
  getPlaces,
}
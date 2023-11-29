import placesService from "@/services/placesService";
import { IPlace } from "@/types/IPlace";
import { useEffect, useState } from "react";

export const usePlaces = () => {
  const [places, setPlaces] = useState<IPlace[]>([]);

  useEffect(() => {
    (async () => {
      const places = await placesService.getPlaces() || [];
      setPlaces(places);
    })()
  }, []);

  return places;
}
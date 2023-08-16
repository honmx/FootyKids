import { StaticImageData } from "next/image";

export interface IPlace {
  photo: StaticImageData,
  name: string;
  address: string;
}
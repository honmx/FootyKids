import { StaticImageData } from "next/image";

// to change
export interface IPlace {
  photo: StaticImageData,
  name: string;
  address: string;
}
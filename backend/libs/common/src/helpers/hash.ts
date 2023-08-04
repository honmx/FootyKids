import { ICoach } from "../types/ICoach";

export const hash = (obj: ICoach) => {
  let result = "";

  for (const prop in obj) {
    result += obj[prop] + "_";
  }

  return result.slice(0, result.length - 1);
}
import { getDateFromString } from "@/helpers/getDateFromString";
import { UserType } from "@/types/UserType";

export const selectUserFilterValues = [
  {
    id: 1,
    text: "Все",
    filterFn: (user: UserType) => true
  },
  {
    id: 2,
    text: "Тренеры",
    filterFn: (user: UserType) => user.type === "coach" 
  },
  {
    id: 3,
    text: "Дети",
    filterFn: (user: UserType) => user.type === "user" 
  },
  {
    id: 4,
    text: "С недейств. мед. справкой",
    filterFn: (user: UserType) => user.type === "user" && (user.medicalDocument?.expires && getDateFromString(user.medicalDocument.expires) < new Date() || !user.medicalDocument?.expires)
  },
  {
    id: 5,
    text: "С недейств. страховкой",
    filterFn: (user: UserType) => user.type === "user" && (user.insurance?.expires && getDateFromString(user.insurance.expires) < new Date() || !user.insurance?.expires)
  },
  {
    id: 6,
    text: "С недейств. абонементом",
    filterFn: (user: UserType) => user.type === "user" && user.trainingsLeft <= 0
  },
];
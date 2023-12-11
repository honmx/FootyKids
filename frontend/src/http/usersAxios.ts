import axios from "axios";

export const $usersAPI = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/users`
});
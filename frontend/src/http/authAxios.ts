import axios from "axios";

export const $authAPI = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/auth`
});
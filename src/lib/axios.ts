import axios from "axios";
import { getBaseUrl } from "./utils";

export const axiosInstance = axios.create({
  baseURL: `${getBaseUrl()}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

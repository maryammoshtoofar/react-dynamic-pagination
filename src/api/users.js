import { LOGIN_URL } from "../config/api";
import axios from "./http";

export const loginRequest = async (user) => {
  try {
    const response = await axios.post(LOGIN_URL, user);
    return response.data;
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};

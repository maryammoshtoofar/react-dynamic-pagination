import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginRequest } from "../../../api/users";
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  IS_LOGGED_IN,
} from "../../../config/constants";

const initialState = {
  isLoggedIn: localStorage.getItem(IS_LOGGED_IN)
    ? localStorage.getItem(IS_LOGGED_IN)
    : false,
  error: "",
};

export const login = createAsyncThunk("users/login", async (user) => {
  try {
    const response = await loginRequest(user);
    localStorage.setItem(ACCESS_TOKEN, response.accessToken);
    localStorage.setItem(IS_LOGGED_IN, "true");
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Login
    builder.addCase(login.fulfilled, (state, action) => {
      console.log("fulfilled", action);
      return { ...state, isLoggedIn: true, error: "" };
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log("rejected", action);
      return { ...state, isLoggedIn: false, error: "invalid username or pass" };
    });
  },
});

export default usersSlice.reducer;

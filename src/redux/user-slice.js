import { createSlice } from "@reduxjs/toolkit";

const initialState = { online: false };

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    login(state, action) {
      console.log(initialState, "login initialState");
      state.online = true;
      console.log(state.online, "login online state");
    },
    logout(state, action) {
      console.log(initialState, "logout state");
      state.online = false;
      console.log(state.online, "logout online state");
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
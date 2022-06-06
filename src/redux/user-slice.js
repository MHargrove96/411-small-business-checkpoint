import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: "", password: "", online: false };

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    login(state, action) {
      if (state.username.length > 0 && state.password.length > 0) {
        console.log(state.username.length, "state.username.length");
        state.online = true;
      }
      if (state.username.length < 0 || state.password.length < 0) {
        console.log(state.username.length, "state.username.length not filled");
      }
    },
    logout(state, action) {
      state.online = false;
    },
    username(state, action) {
      state.username = action.payload;
      console.log(action.payload, "action.payload");
      console.log(state, "username state");
    },
    password(state, action) {
      state.password = action.payload;
      console.log(action.payload, "action.payload");
      console.log(state, "password state");
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;

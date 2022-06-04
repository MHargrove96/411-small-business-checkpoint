import { configureStore } from "@reduxjs/toolkit";
import businessSlice from "./business-slice";
import userSlice from "./user-slice";
const store = configureStore({
  reducer: { businesses: businessSlice.reducer, online: userSlice.reducer },
});

export default store;

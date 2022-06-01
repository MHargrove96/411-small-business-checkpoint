import { configureStore } from "@reduxjs/toolkit";
import businessSlice from "./business-slice";
const store = configureStore({
  reducer: businessSlice.reducer,
});

export default store;

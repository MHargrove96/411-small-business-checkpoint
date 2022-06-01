import { createSlice } from "@reduxjs/toolkit";
//the only import need in this file

const initialState = { businesses: [] };

const businessSlice = createSlice({
  name: "businessSlice",
  initialState, //because the key and the value have the same name i do not need to write it twice!
  reducers: {
    fetchBusinesses(state, action) {
      // console.log(action.payload);
      state.businesses = action.payload; //payload is a keyword given when using redux
    },
  },
});

export const businessActions = businessSlice.actions;
export default businessSlice;

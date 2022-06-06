import { createSlice } from "@reduxjs/toolkit";
//the only import need in this file

const initialState = { businesses: [] };

const businessSlice = createSlice({
  name: "businessSlice",
  initialState, //because the key and the value have the same name i do not need to write it twice!
  reducers: {
    fetchBusinesses(state, action) {
      state.businesses = action.payload; //payload is a keyword given when using redux
    },
    addBusiness(state, action) {
      let id = state.businesses.length + 1;
      action.payload.id = id;
      console.log("payload", action.payload);
      state.businesses = [...state.businesses, action.payload];
    },
    removeBusiness(state, action) {
      console.log(action, "Action");
      console.log(action.payload, "Payload");
      let id = action.payload;
      console.log(id, "ID");
      let foundIndex = state.businesses.findIndex(
        (business) => business.id === id
      );
      console.log(foundIndex, "FoundIndex");
      state.businesses.splice(foundIndex, 1);
    },
  },
});
// console.log(businessSlice.actions);
export const businessActions = businessSlice.actions;
export default businessSlice;

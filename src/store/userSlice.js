import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { firstName: "kim", lastName: "구라" },
  reducers: {
    changeKimTrue(state) {
      state.lastName = "진실";
    },
  },
});

export let { changeKimTrue } = user.actions;
export default user;

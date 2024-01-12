import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: true };
const topDropDownSlice = createSlice({
  name: "topDropDown",
  initialState,
  reducers: {
    getDropState: (state) => {
      state.value = state.value;
    },
    dropToggle: (state) => {
      state.value = !state.value;
    },
    dropChange: (state, action) => {
      state.value = action.payload;
    },
    dropClose: (state) => {
      state.value = false;
    },
  },
});

export const { getDropState, dropChange, dropClose, dropToggle } =
  topDropDownSlice.actions;

export default topDropDownSlice.reducer;

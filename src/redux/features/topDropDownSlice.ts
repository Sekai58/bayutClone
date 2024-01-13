import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "" };
const topDropDownSlice = createSlice({
  name: "topDropDown",
  initialState,
  reducers: {
    getDropState: (state) => {
      state.value = state.value;
    },
    dropToggle: (state, action) => {
      if (state.value == action.payload) {
        state.value = "";
      } else {
        state.value = action.payload;
      }
    },
    dropChange: (state, action) => {
      state.value = action.payload;
    },
    dropClose: (state) => {
      state.value = "";
    },
  },
});

export const { getDropState, dropChange, dropClose, dropToggle } =
  topDropDownSlice.actions;

export default topDropDownSlice.reducer;

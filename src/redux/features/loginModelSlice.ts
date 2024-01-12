import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };
const loginModelSlice = createSlice({
  name: "loginModel",
  initialState,
  reducers: {
    getLoginOpenState: (state) => {
      state.value = state.value;
    },
    loginOpen: (state) => {
      state.value = true;
    },
    loginClose: (state) => {
      state.value = false;
    },
  },
});

export const { getLoginOpenState, loginOpen, loginClose } =
  loginModelSlice.actions;

export default loginModelSlice.reducer;

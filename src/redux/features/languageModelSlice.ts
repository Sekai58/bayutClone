import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };
const languageModelSlice = createSlice({
  name: "langModel",
  initialState,
  reducers: {
    getLangOpenState: (state) => {
      state.value = state.value;
    },
    langOpen: (state) => {
      state.value = true;
    },
    langClose: (state) => {
      state.value = false;
    },
  },
});

export const { getLangOpenState, langOpen, langClose } =
  languageModelSlice.actions;

export default languageModelSlice.reducer;

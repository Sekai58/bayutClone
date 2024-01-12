import { configureStore } from "@reduxjs/toolkit";
import languageModelSlice from "./features/languageModelSlice";
import loginModelSlice from "./features/loginModelSlice";
import topDropDownSlice from "./features/topDropDownSlice";

export const store = configureStore({
  reducer: {
    langModel: languageModelSlice,
    loginModel: loginModelSlice,
    topDrop: topDropDownSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

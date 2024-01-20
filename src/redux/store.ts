import { configureStore } from "@reduxjs/toolkit";
import languageModelSlice from "./features/languageModelSlice";
import loginModelSlice from "./features/loginModelSlice";
import topDropDownSlice from "./features/topDropDownSlice";
import hamburgerSlice from "./features/hamburgerSlice";

export const store = configureStore({
  reducer: {
    langModel: languageModelSlice,
    loginModel: loginModelSlice,
    topDrop: topDropDownSlice,
    hamburger: hamburgerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

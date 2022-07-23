import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import signUpSlice from "./signUpSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    signUp: signUpSlice.reducer,
  },
});

export default store;

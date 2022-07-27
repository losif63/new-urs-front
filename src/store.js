import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import signUpSlice from "./signUpSlice";
import reservationSlice from "./reservationSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    signUp: signUpSlice.reducer,
    reservation: reservationSlice.reducer,
  },
});

export default store;

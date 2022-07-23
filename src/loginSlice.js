import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { email: "", password: "", loginSucc: false },
  reducers: {
    writeEmail: (state, action) => {
      state.email = action.payload;
    },
    writePassword: (state, action) => {
      state.password = action.payload;
    },
    setLogin: (state, action) => {
      state.loginSucc = action.payload;
    },
  },
});

export default loginSlice;

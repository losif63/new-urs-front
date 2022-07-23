import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { email: "", password: "" },
  reducers: {
    writeEmail: (state, action) => {
      state.email = action.payload;
    },
    writePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export default loginSlice;

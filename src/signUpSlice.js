import { createSlice } from "@reduxjs/toolkit";

const signUpSlice = createSlice({
  name: "signUp",
  initialState: { id: "", password: "" },
  reducers: {
    writeId: (state, action) => {
      state.id = action.payload;
    },
    writePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export default signUpSlice;

import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
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

export default loginSlice;

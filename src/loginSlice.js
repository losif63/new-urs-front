import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { u_id: "", name: "", email: "", password: "" },
  reducers: {
    writeUId: (state, action) => {
      state.u_id = action.payload;
    },
    writeName: (state, action) => {
      state.name = action.payload;
    },
    writeEmail: (state, action) => {
      state.email = action.payload;
    },
    writePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export default loginSlice;

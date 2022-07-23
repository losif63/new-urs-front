import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { id: "", password: "" },
  reducers: {
    write: (state, action) => {
      state.id = action.payload.id;
      state.password = action.payload.password;
    },
  },
});

export default loginSlice;

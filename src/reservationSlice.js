import { createSlice } from "@reduxjs/toolkit";

const reservationSlice = createSlice({
  name: "reservation",
  initialState: { name: "", purpose: "" },
  reducers: {
    writeName: (state, action) => {
      state.name = action.payload;
    },
    writePurpose: (state, action) => {
      state.purpose = action.payload;
    },
  },
});

export default reservationSlice;

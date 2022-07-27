import { createSlice } from "@reduxjs/toolkit";

const reservationSlice = createSlice({
  name: "reservation",
  initialState: { purpose: "" },
  reducers: {
    writePurpose: (state, action) => {
      state.purpose = action.payload;
    },
  },
});

export default reservationSlice;

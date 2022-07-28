import { createSlice } from "@reduxjs/toolkit";

const reservationSlice = createSlice({
  name: "reservation",
  initialState: { name: "", purpose: "", lID: "",  roomName: "", buildingName: ""},
  reducers: {
    writeName: (state, action) => {
      state.name = action.payload;
    },
    writePurpose: (state, action) => {
      state.purpose = action.payload;
    },
    writelID: (state, action) => {
      state.lID = action.payload;
    },
    writeRoomName: (state, action) => {
      state.roomName = action.payload;
    },
    writeBuildingName: (state, action) => {
      state.buildingName = action.payload;
    },
  },
});

export default reservationSlice;

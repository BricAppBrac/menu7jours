import { createSlice } from "@reduxjs/toolkit";

export const prefSlice = createSlice({
  name: "prefs",
  initialState: {
    prefSelected: ["7", "2", null],
  },
  reducers: {
    setPref: (state, { payload }) => {
      state.prefSelected = payload;
    },
  },
});

export const { setPref } = prefSlice.actions;
export default prefSlice.reducer;

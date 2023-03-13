import { createSlice } from "@reduxjs/toolkit";

export const signUpSlice = createSlice({
  name: "displaySign",
  initialState: {
    displaySignUp: null,
  },
  reducers: {
    setSignUp: (state, { payload }) => {
      state.displaySignUp = payload;
    },
    setCloseUp: (state, { payload }) => {
      state.closeSignUp = payload;
    },
  },
});

export const { setSignUp, setCloseUp } = signUpSlice.actions;
export default signUpSlice.reducer;

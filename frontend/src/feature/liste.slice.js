import { createSlice } from "@reduxjs/toolkit";

export const listeSlice = createSlice({
  name: "liste",
  initialState: {
    listeData: [],
  },
  reducers: {
    getListe: (state, { payload }) => {
      state.listeData = payload;
    },
    deleteRecipe: (state, { payload }) => {
      state.listeData = state.listeData.filter(
        (recipe) => recipe._id !== payload
      );
    },
  },
});

export const { getListe, deleteRecipe } = listeSlice.actions;
export default listeSlice.reducer;

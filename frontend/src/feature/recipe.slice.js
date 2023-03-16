import { createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    recipeData: [],
  },
  reducers: {
    createRecipe: (state, { payload }) => {
      state.recipeData.push(payload);
    },
  },
});

export const { createRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;

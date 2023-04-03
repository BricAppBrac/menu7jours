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
    deleteNewRecipe: (state) => [],
  },
});

export const { createRecipe, deleteNewRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import displaySignUpReducer from "../feature/signUp.slice";
import recipeReducer from "../feature/recipe.slice";

export default configureStore({
  reducer: {
    displaySignUp: displaySignUpReducer,
    newRecipe: recipeReducer,
  },
});

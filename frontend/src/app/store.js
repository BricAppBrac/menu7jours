import { configureStore } from "@reduxjs/toolkit";
import displaySignUpReducer from "../feature/signUp.slice";
import recipeReducer from "../feature/recipe.slice";
import listeReducer from "../feature/liste.slice";
import sortReducer from "../feature/sort.slice";
import checkedReducer from "../feature/checked.slice";
import indicReducer from "../feature/indic.slice";
import prefReducer from "../feature/pref.slice";
import menuReducer from "../feature/menu.slice";
import menurecipesReducer from "../feature/menurecipes.slice";
import menucompoReducer from "../feature/menucompo.slice";

export default configureStore({
  reducer: {
    displaySignUp: displaySignUpReducer,
    newRecipe: recipeReducer,
    listeRecipes: listeReducer,
    sortSelect: sortReducer,
    checkedRec: checkedReducer,
    confDelete: indicReducer,
    prefSelect: prefReducer,
    menuPref: menuReducer,
    menuRecipes: menurecipesReducer,
    menuCompo: menucompoReducer,
  },
});

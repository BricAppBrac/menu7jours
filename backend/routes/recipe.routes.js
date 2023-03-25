const express = require("express");
const auth = require("../middleware/auth");
const {
  setRecipe,
  setCompleteRecipe,
  getRecipes,
  editRecipe,
  deleteRecipe,
  ingredientRecipe,
  supprIngredientRecipe,
  seasonRecipe,
  supprSeasonRecipe,
  quantityIngredient,
  supprQuantityIngredient,
  categoryIngredient,
  supprCategoryIngredient,
  stepRecipe,
  supprStepRecipe,
  // likeRecipe,
  // dislikeRecipe,
} = require("../controllers/recipe.controller");
const router = express.Router();

// routes qui demandent l'authentification
// router.get("/", auth, getRecipes);
router.get("/", getRecipes);
// router.post("/", auth, setRecipe);
router.post("/", setRecipe);
// router.post("/", auth, setRecipe);
router.post("/complete", setCompleteRecipe);
// router.put("/:id", auth, editRecipe);
router.put("/:id", editRecipe);
// router.delete("/:id", auth, deleteRecipe);
router.delete("/:id", deleteRecipe);
// router.patch("/ingredient-recipe/:id", auth, ingredientRecipe);
router.patch("/ingredient-recipe/:id", ingredientRecipe);
// router.patch("/suppr-ingredient-recipe/:id", auth, supprIngredientRecipe);
router.patch("/suppr-ingredient-recipe/:id", supprIngredientRecipe);
// router.patch("/quantity-ingredient/:id", auth, quantityIngredient);
router.patch("/quantity-ingredient/:id", quantityIngredient);
// router.patch("/suppr-quantity-ingredient/:id", auth, supprQuantityIngredient);
router.patch("/suppr-quantity-ingredient/:id", supprQuantityIngredient);
// router.patch("/category-ingredient/:id", auth, categoryIngredient);
router.patch("/category-ingredient/:id", categoryIngredient);
// router.patch("/suppr-category-ingredient/:id", auth, supprCategoryIngredient);
router.patch("/suppr-category-ingredient/:id", supprCategoryIngredient);
// router.patch("/season-recipe/:id", auth, seasonRecipe);
router.patch("/season-recipe/:id", seasonRecipe);
// router.patch("/suppr-season-recipe/:id", auth, supprSeasonRecipe);
router.patch("/suppr-season-recipe/:id", supprSeasonRecipe);
// router.patch("/step-recipe/:id", auth, stepRecipe);
router.patch("/step-recipe/:id", stepRecipe);
// router.patch("/suppr-step-recipe/:id", auth, supprStepRecipe);
router.patch("/suppr-step-recipe/:id", supprStepRecipe);

// router.patch("/like-recipe/:id", likeRecipe);
// router.patch("/dislike-recipe/:id", dislikeRecipe);

module.exports = router;

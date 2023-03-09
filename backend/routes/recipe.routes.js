const express = require("express");
const {
  setRecipe,
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

router.get("/", getRecipes);
router.post("/", setRecipe);
router.put("/:id", editRecipe);
router.delete("/:id", deleteRecipe);
router.patch("/ingredient-recipe/:id", ingredientRecipe);
router.patch("/suppr-ingredient-recipe/:id", supprIngredientRecipe);

router.patch("/quantity-ingredient/:id", quantityIngredient);
router.patch("/suppr-quantity-ingredient/:id", supprQuantityIngredient);

router.patch("/category-ingredient/:id", categoryIngredient);
router.patch("/suppr-category-ingredient/:id", supprCategoryIngredient);

router.patch("/season-recipe/:id", seasonRecipe);
router.patch("/suppr-season-recipe/:id", supprSeasonRecipe);

router.patch("/step-recipe/:id", stepRecipe);
router.patch("/suppr-step-recipe/:id", supprStepRecipe);

// router.patch("/like-recipe/:id", likeRecipe);
// router.patch("/dislike-recipe/:id", dislikeRecipe);

module.exports = router;

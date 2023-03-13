const express = require("express");
const auth = require("../middleware/auth");
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

// routes qui demandent l'authentification
router.get("/", auth, getRecipes);
// router.get("/", getRecipes);
router.post("/", auth, setRecipe);
router.put("/:id", auth, editRecipe);
router.delete("/:id", auth, deleteRecipe);
router.patch("/ingredient-recipe/:id", auth, ingredientRecipe);
router.patch("/suppr-ingredient-recipe/:id", auth, supprIngredientRecipe);

router.patch("/quantity-ingredient/:id", auth, quantityIngredient);
router.patch("/suppr-quantity-ingredient/:id", auth, supprQuantityIngredient);

router.patch("/category-ingredient/:id", auth, categoryIngredient);
router.patch("/suppr-category-ingredient/:id", auth, supprCategoryIngredient);

router.patch("/season-recipe/:id", auth, seasonRecipe);
router.patch("/suppr-season-recipe/:id", auth, supprSeasonRecipe);

router.patch("/step-recipe/:id", auth, stepRecipe);
router.patch("/suppr-step-recipe/:id", auth, supprStepRecipe);

// router.patch("/like-recipe/:id", likeRecipe);
// router.patch("/dislike-recipe/:id", dislikeRecipe);

module.exports = router;

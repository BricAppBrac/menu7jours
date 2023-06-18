const express = require("express");
const auth = require("../middleware/auth");
const {
  getMenus,
  setMenu,
  editMenu,
  deleteMenu,
} = require("../controllers/menu.controller");
const router = express.Router();

// routes qui demandent l'authentification
// router.get("/", auth, getRecipes);
router.get("/", getMenus);
// router.post("/", auth, setRecipe);
router.post("/", setMenu);
// router.put("/:id", auth, editRecipe);
router.put("/:id", editMenu);
// router.delete("/:id", auth, deleteRecipe);
router.delete("/:id", deleteMenu);

module.exports = router;

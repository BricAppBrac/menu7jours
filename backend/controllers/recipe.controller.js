const RecipeModel = require("../models/recipe.model");

// fonction pour récupérer toutes les recettes
module.exports.getRecipes = async (req, res) => {
  const recipes = await RecipeModel.find();
  res.status(200).json(recipes);
};

// fonction pour créer une recette (titre et auteur)
module.exports.setRecipe = async (req, res) => {
  if (!req.body.title) {
    res.status(400).json({ message: "Merci d'ajouter un titre" });
  }

  const recipe = await RecipeModel.create({
    title: req.body.title,
    author: req.body.author,
  });
  res.status(200).json(recipe);
};

// fonction pour modifier une recette
module.exports.editRecipe = async (req, res) => {
  const recipe = await RecipeModel.findById(req.params.id);

  if (!recipe) {
    res
      .status(400)
      .json({ message: "Modification impossible. Cette recette n'existe pas" });
  }

  const updateRecipe = await RecipeModel.findByIdAndUpdate(recipe, req.body, {
    new: true,
  });

  res.status(200).json(updateRecipe);
};

// fonction pour supprimer une recette
module.exports.deleteRecipe = async (req, res) => {
  const recipe = await RecipeModel.findById(req.params.id);

  if (!recipe) {
    res
      .status(400)
      .json({ message: "Suppression impossible. Cette recette n'existe pas" });
  }

  await RecipeModel.findByIdAndDelete(req.params.id);

  // await recipe.remove();
  res.status(200).json({ message: "Recette supprimée " + req.params.id });
};

// fonction pour ajouter une saison
module.exports.seasonRecipe = async (req, res) => {
  try {
    await RecipeModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { seasons: req.body.season } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};

// fonction pour supprimer une saison
module.exports.supprSeasonRecipe = async (req, res) => {
  try {
    await RecipeModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { seasons: req.body.season } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};

// fonction pour ajouter un ingrédient
module.exports.ingredientRecipe = async (req, res) => {
  try {
    await RecipeModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { ingredients: req.body.ingredient } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};

// fonction pour supprimer un ingrédient
module.exports.supprIngredientRecipe = async (req, res) => {
  try {
    await RecipeModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { ingredients: req.body.ingredient } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};

// fonction pour ajouter une quantité
module.exports.quantityIngredient = async (req, res) => {
  try {
    await RecipeModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { quantities: req.body.quantity } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};

// fonction pour supprimer une quantité
module.exports.supprQuantityIngredient = async (req, res) => {
  try {
    await RecipeModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { quantities: req.body.quantity } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};

// fonction pour ajouter une catégorie
module.exports.categoryIngredient = async (req, res) => {
  try {
    await RecipeModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { categories: req.body.category } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};

// fonction pour supprimer une catégorie
module.exports.supprCategoryIngredient = async (req, res) => {
  try {
    await RecipeModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { categories: req.body.category } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};

// fonction pour ajouter une étape
module.exports.stepRecipe = async (req, res) => {
  try {
    await RecipeModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { steps: req.body.step } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};

// fonction pour supprimer une étape
module.exports.supprStepRecipe = async (req, res) => {
  try {
    await RecipeModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { steps: req.body.step } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};

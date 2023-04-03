import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setChecked } from "../feature/checked.slice";
import { setConfirmDelete } from "../feature/indic.slice";
import ListeDeleteRecipe from "./ListeDeleteRecipe";

const RecipeCardProtect = ({ recipe }) => {
  const dispatch = useDispatch();
  // dispatch(setConfirmDelete("liste-0"));

  const handleDetails = () => {
    console.log("handleDetails");
    console.log(recipe);
    dispatch(setChecked(recipe));
  };

  return (
    <div className="recipe-card">
      <div className="recipe-card-content">
        <h3>{recipe.title}</h3>

        <h4>Ingrédients principaux: </h4>
        <div className="ingredients-liste">
          <p>{recipe.ingredients[0]}</p>

          <p>{recipe.ingredients[1] ? " / " + recipe.ingredients[1] : ""}</p>
          <p>{recipe.ingredients[2] ? " / " + recipe.ingredients[2] : ""}</p>
          <p>{recipe.ingredients[3] ? " / " + recipe.ingredients[3] : ""}</p>
          <p>{recipe.ingredients[4] ? " / " + recipe.ingredients[4] : ""}</p>
        </div>
        <div className="checkbox-container">
          <div className="box-details" onClick={handleDetails}>
            <NavLink to="/pagedetailsrecipe">
              <i className="fa-solid fa-magnifying-glass"></i>
            </NavLink>
          </div>
          <ListeDeleteRecipe recipeId={recipe._id} delOrigin={"liste-0"} />
        </div>
      </div>
    </div>
  );
};

export default RecipeCardProtect;

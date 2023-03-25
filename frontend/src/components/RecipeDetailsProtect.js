import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe } from "../feature/recipe.slice";
import axios from "axios";
import IngredientCardDetails from "./IngredientCardDetails";
import DeleteRecipe from "./DeleteRecipe";

const RecipeDetailsProtect = () => {
  const [displayDetails, setDisplayDetails] = useState(true);
  const [messageDetails, setMessageDetails] = useState("");

  const checkedRecipe = useSelector((state) => state.checkedRec.checkedRecipe);

  const [displayIngredients, setDisplayIngredients] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ]);

  const [displaySteps, setDisplaySteps] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("Melissande");
  const [newIngredients, setNewIngredients] = useState([]);
  const [newQuantities, setNewQuantities] = useState([]);
  const [newCategories, setNewCategories] = useState([]);
  const [newSteps, setNewSteps] = useState([]);
  const [newSeasons, setNewSeasons] = useState([]);
  let arrayNew = [];
  let arrayW = [];

  const dispatch = useDispatch();

  //////////////////////////////////////////////////////////////////////////////////
  // Gestion des inputs
  ////////////////////////////////////////////////////
  ////////////////////////////
  // Stockage des saisons
  ///////////////////////
  const handleSeasons = (newSeas) => {
    if (document.getElementById(newSeas).checked == true) {
      console.log("checked");
      arrayW.push(newSeas);
      arrayNew = [...newSeasons, ...arrayW];
    } else {
      console.log("décochée");
      arrayW = newSeasons;
      arrayNew = arrayW.filter(function (element) {
        return element !== newSeas;
      });
    }
    console.log("Seasons array");
    console.log(arrayNew);
    setNewSeasons(arrayNew);
  };

  ////////////////////////
  // --- Gestion du delete
  ////////////////////////

  /////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      {displayDetails && (
        <div className="recipe-details">
          <div className="details-input">
            <div className="details-title">
              <h4>Titre de la Recette</h4>
              <h5>{checkedRecipe.title}</h5>
            </div>
            <h4>Saisons</h4>
            <div className="seasons-container">
              <div className="details-input">
                <label htmlFor="printemps">Printemps </label>
                <input
                  name="printemps"
                  className="season"
                  type="checkbox"
                  id="printemps"
                  defaultChecked={
                    checkedRecipe.seasons.includes("printemps") ? "checked" : ""
                  }
                />
              </div>

              <div className="details-input">
                <label htmlFor="été">Eté </label>
                <input
                  name="été"
                  className="season"
                  type="checkbox"
                  id="été"
                  defaultChecked={
                    checkedRecipe.seasons.includes("été") ? "checked" : ""
                  }
                />
              </div>
              <div className="details-input">
                <label htmlFor="automne">Automne </label>
                <input
                  name="automne"
                  className="season"
                  type="checkbox"
                  id="automne"
                  defaultChecked={
                    checkedRecipe.seasons.includes("automne") ? "checked" : ""
                  }
                />
              </div>
              <div className="details-input">
                <label htmlFor="hiver">Hiver</label>
                <input
                  name="hiver"
                  className="season"
                  type="checkbox"
                  id="hiver"
                  defaultChecked={
                    checkedRecipe.seasons.includes("hiver") ? "checked" : ""
                  }
                />
              </div>
            </div>
            <div className="ingredients-label">
              <h4>Ingrédients</h4>
              <h4>Quantités</h4>
              <h4>Catégories</h4>
            </div>
            {/* /////////////////////////////////////////////////// */}
            <div className="ingredients-container-details">
              {displayIngredients.map((index) => (
                <IngredientCardDetails
                  key={index}
                  index={index}
                  recipe={checkedRecipe}
                />
              ))}
              {/* /////////////////////////////////////////////////// */}
            </div>
            {/* /////////////////////////////////////////////////// */}
            <h4>Etapes</h4>
            <div className="steps-container-details">
              {displaySteps.map((indexStep) => (
                <div className="details-input" key={indexStep}>
                  <h6 name={"newStep" + indexStep} id={"newStep" + indexStep}>
                    {checkedRecipe.steps[indexStep]}
                  </h6>
                </div>
              ))}
            </div>
            <p className="espace-message">{messageDetails}</p>
            <div className="private-button-container">
              {/* <button>Supprimer</button> */}
              <DeleteRecipe
                recipeId={checkedRecipe._id}
                delOrigin={"détails-0"}
              />
              <button>Modifier</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeDetailsProtect;

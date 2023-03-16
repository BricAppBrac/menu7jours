import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createRecipe } from "../feature/recipe.slice";
import axios from "axios";
import IngredientCard from "./IngredientCard";

const RecipeNew = () => {
  const [displayNew, setDisplayNew] = useState(true);
  const [messageNew, setMessageNew] = useState("Saisir les informations");

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
  let arrayIngredients = [];
  let arrayQuantities = [];
  let arrayCategories = [];
  let arraySteps = [];

  const dispatch = useDispatch();

  //////////////////////////////////////////////////////////////////////////////////
  // Gestion des inputs
  /////////////////////////////////////////////////////////////////////////////////
  // Stockage des saisons
  ///////////////////////
  // const handleSeasons = async (e) => {
  //   await arrayW.push(e.target.name);
  //   arrayNew = [...newSeasons, ...arrayW];
  //   console.log("Seasons array");
  //   console.log(arrayNew);
  //   setNewSeasons(arrayNew);
  // };
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
  /////////////////////////////
  // Stockage des ingrédients
  /////////////////////////////
  const handleIngredients = (newVal, ingId) => {
    // e.preventDefault();
    console.log("newVal Ingrédient :");
    console.log(newVal);
    console.log("ingId :" + ingId);
    arrayIngredients[ingId] = newVal;
    console.log("arrayIngredients :");
    console.log(arrayIngredients);
  };
  /////////////////////////////
  // Stockage des quantités
  /////////////////////////////
  const handleQuantities = (newQtt, qttId) => {
    console.log("newQtt Quantité :");
    console.log(newQtt);
    console.log("qttId :" + qttId);
    arrayQuantities[qttId] = newQtt;
    console.log("arrayQuantités :");
    console.log(arrayQuantities);
  };
  /////////////////////////////
  // Stockage des catégories
  /////////////////////////////
  const handleCategories = (newCat, catId) => {
    console.log("newCat Catégorie :");
    console.log(newCat);
    console.log("catId :" + catId);
    arrayCategories[catId] = newCat;
    console.log("arrayCategories :");
    console.log(arrayCategories);
  };
  /////////////////////////////
  // Stockage des étapes
  /////////////////////////////
  const handleSteps = (newStp, stpId) => {
    console.log("newStp Etape :");
    console.log(newStp);
    console.log("stpId :" + stpId);
    arraySteps[stpId] = newStp;
    console.log("arraySteps");
    console.log(arraySteps);
  };
  ///////////////////////////
  // Reset du formulaire
  //////////////////////////
  const resetForm = () => {
    console.log("Réinit du formulaire");
    document.getElementById("new-form").reset();
  };
  /////////////////////////////////////////////////////////////////////////////////
  // --- Gestion du Submit pour la création dans le store et la BDD ---
  /////////////////////////////////////////////////////////////////////////////////
  const handleNew = (e) => {
    e.preventDefault();
    console.log("début SUBMIT");
    console.log("new Ing / Qtt / Cat / Stp");
    console.log(arrayIngredients);
    console.log(arrayQuantities);
    console.log(arrayCategories);
    console.log(arraySteps);

    // Récupération des données stockées dans les tableaux intermédiaires
    // NE FONCTIONNE PAS: TABLEAUX VIDES
    setNewIngredients(arrayIngredients);
    setNewQuantities(arrayQuantities);
    setNewCategories(arrayCategories);
    setNewSteps(arraySteps);

    console.log("APRES les setNew...");
    console.log("new Ing / Qtt / Cat / Stp");
    console.log(newIngredients);
    console.log(newQuantities);
    console.log(newCategories);
    console.log(newSteps);

    // Création d'une nouvelle recette dans le store
    console.log("Création d'une nouvelle recette dans le store");

    const data = {
      title: newTitle,
      author: newAuthor,
      seasons: newSeasons,
      ingredients: arrayIngredients,
      quantities: arrayQuantities,
      categories: arrayCategories,
      steps: arraySteps,
      // ingredients: newIngredients,
      // quantities: newQuantities,
      // categories: newCategories,
      // steps: newSteps,
      _id: Date.now(),
    };

    dispatch(createRecipe(data));

    // mettre à jour la BDD MongoDB et récupérer l'ID généré

    console.log("affichage AVANT BDD :");
    console.log(data);

    // Création d'une recette : titre et auteur

    axios.post("http://localhost:5000/recipe/", data);

    // Réinitialiser le State de newRecipe
    setNewTitle("");
    setNewAuthor("Melissande");
    setNewSeasons([]);
    setNewIngredients([]);
    setNewQuantities([]);
    setNewCategories([]);
    setNewSteps([]);
    setMessageNew(
      "Création effectuée, vous pouvez saisir une nouvelle recette"
    );
    resetForm();
  };
  /////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      {displayNew && (
        <div className="recipe-new">
          <form onSubmit={handleNew} className="new-form" id="new-form">
            <div className="new-input">
              {/* <label htmlFor="newTitle">Titre de la Recette</label> */}
              <h4>Titre de la Recette</h4>
              <input
                name="newTitle"
                // required
                type="text"
                className="new"
                id="newTitle"
                autoComplete="off"
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            <h4>Saisons</h4>
            <div className="seasons-container">
              <div className="new-input">
                <label htmlFor="printemps">Printemps </label>
                <input
                  name="printemps"
                  className="season"
                  type="checkbox"
                  id="printemps"
                  onChange={(e) => {
                    handleSeasons(e.target.name);
                  }}
                />
              </div>

              <div className="new-input">
                <label htmlFor="été">Eté </label>
                <input
                  name="été"
                  className="season"
                  type="checkbox"
                  id="été"
                  onChange={(e) => {
                    handleSeasons(e.target.name);
                  }}
                />
              </div>
              <div className="new-input">
                <label htmlFor="automne">Automne </label>
                <input
                  name="automne"
                  className="season"
                  type="checkbox"
                  id="automne"
                  onChange={(e) => {
                    handleSeasons(e.target.name);
                  }}
                />
              </div>
              <div className="new-input">
                <label htmlFor="hiver">Hiver</label>
                <input
                  name="hiver"
                  className="season"
                  type="checkbox"
                  id="hiver"
                  onChange={(e) => {
                    handleSeasons(e.target.name);
                  }}
                />
              </div>
            </div>
            <div className="ingredients-label">
              <h4>Ingrédients</h4>
              <h4>Quantités</h4>
              <h4>Catégories</h4>
            </div>
            {/* /////////////////////////////////////////////////// */}
            <div className="ingredients-container">
              {displayIngredients.map((index) => (
                <IngredientCard
                  key={index}
                  index={index}
                  // inputValue={""}
                  handleIngredients={handleIngredients}
                  handleQuantities={handleQuantities}
                  handleCategories={handleCategories}
                />
              ))}
              {/* /////////////////////////////////////////////////// */}
            </div>
            {/* /////////////////////////////////////////////////// */}
            <h4>Etapes</h4>
            <div className="steps-container">
              {displaySteps.map((indexStep) => (
                <div className="new-input" key={indexStep}>
                  <input
                    name={"newStep" + indexStep}
                    type="text"
                    className="details"
                    id={"newStep" + indexStep}
                    autoComplete="off"
                    placeholder={"Etape " + (indexStep + 1)}
                    onChange={(e) => {
                      handleSteps(e.target.value, indexStep);
                    }}
                  />
                </div>
              ))}
            </div>
            <p className="espace-message">{messageNew}</p>
            <div className="button-container">
              <button>Valider</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default RecipeNew;

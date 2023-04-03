import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe, deleteNewRecipe } from "../feature/recipe.slice";
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
  const [newSeasons, setNewSeasons] = useState([]);
  const [newIngredients, setNewIngredients] = useState([]);
  const [newQuantities, setNewQuantities] = useState([]);
  const [newCategories, setNewCategories] = useState([]);
  const [newSteps, setNewSteps] = useState([]);

  const dispatch = useDispatch();

  let arrayNew = [];
  let arrayW = [];

  // let arrayIngredients = newIngredients;
  // let arrayQuantities = newQuantities;
  // let arrayCategories = newCategories;
  // let arraySteps = newSteps;

  //////////////////////////////////////////////////////////////////////////////////
  // Gestion des inputs
  ////////////////////////////////////////////////////
  ////////////////////////////
  // Stockage des saisons
  ///////////////////////
  const handleSeasons = (newSeas) => {
    if (document.getElementById(newSeas).checked == true) {
      console.log("checked");
      arrayNew = newSeasons;
      arrayW.push(newSeas);
      arrayNew = [...arrayNew, ...arrayW];
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
    arrayNew = [];
    arrayW = [];
  };
  /////////////////////////////
  // Stockage des ingrédients
  /////////////////////////////
  const handleIngredients = (
    newVal,
    ingId,
    newIngredientRef,
    newQuantityRef,
    newCategoryRef
  ) => {
    console.log("newVal Ingrédient :");
    console.log(newVal);
    console.log("ingId :" + ingId);
    console.log("newIngredientRef :");
    console.log(newIngredientRef);

    console.log("newIngredients avant ajout");
    console.log(newIngredients);

    arrayNew = [...newIngredients];
    console.log("arrayNew avant ajout :");
    console.log(arrayNew);
    arrayNew[ingId] = newVal;
    console.log("arrayNew après ajout :");
    console.log(arrayNew);

    setNewIngredients(arrayNew);
    console.log("newIngredients après:");
    console.log(newIngredients);

    // Contrôle du trio Ing / Qtt / Cat
    if (newIngredients[ingId]) {
      console.log("ingrédient renseigné : " + newIngredients[ingId]);

      if (!newQuantities[ingId] || !newCategories[ingId]) {
        setMessageNew(
          "Saisir une quantité et une catégorie pour chaque ingrédient"
        );
        console.log(
          "Saisir une quantité et une catégorie pour chaque ingrédient"
        );
        document.getElementById("form-new-validation").disabled = "disabled";
        newQuantityRef.current.style.backgroundColor = "#d65630";
        newQuantityRef.current.style.color = "rgb(206, 228, 187)";
        newCategoryRef.current.style.backgroundColor = "#d65630";
        newCategoryRef.current.style.color = "rgb(206, 228, 187)";
      } else {
        // Contrôle du trio OK

        setMessageNew("Effectuer les modifications et valider");
        document.getElementById("form-validation").disabled = false;
        newIngredientRef.current.style.backgroundColor = "whitesmoke";
        newIngredientRef.current.style.color = "rgb(37, 21, 11)";
        newQuantityRef.current.style.backgroundColor = "whitesmoke";
        newQuantityRef.current.style.color = "rgb(37, 21, 11)";
        newCategoryRef.current.style.backgroundColor = "whitesmoke";
        newCategoryRef.current.style.color = "rgb(37, 21, 11)";
      }
    }

    // arrayIngredients[ingId] = newVal;
    // console.log("arrayIngredients :");
    // console.log(arrayIngredients);
    // setNewIngredients(arrayIngredients);
  };
  /////////////////////////////
  // Stockage des quantités
  /////////////////////////////
  const handleQuantities = (
    newQtt,
    qttId,
    newIngredientRef,
    newQuantityRef,
    newCategoryRef
  ) => {
    console.log("newQtt Quantité :");
    console.log(newQtt);
    console.log("qttId :" + qttId);

    console.log("newQuantityRef :");
    console.log(newQuantityRef);

    console.log("newQuantities avant ajout");
    console.log(newQuantities);

    arrayNew = [...newQuantities];
    console.log("arrayNew avant ajout :");
    console.log(arrayNew);
    arrayNew[qttId] = newQtt;
    console.log("arrayNew après ajout :");
    console.log(arrayNew);

    setNewQuantities(arrayNew);
    console.log("newQuantities après:");
    console.log(newQuantities);

    // Contrôle du trio Ing / Qtt / Cat
    if (newQuantities[qttId]) {
      console.log("quantité renseignée : " + newQuantities[qttId]);

      if (!newIngredients[qttId] || !newCategories[qttId]) {
        setMessageNew(
          "Saisir un ingrédient et une catégorie pour chaque quantité"
        );
        console.log(
          "Saisir un ingrédient et une catégorie pour chaque quantité"
        );
        document.getElementById("form-new-validation").disabled = "disabled";
        newIngredientRef.current.style.backgroundColor = "#d65630";
        newIngredientRef.current.style.color = "rgb(206, 228, 187)";
        newCategoryRef.current.style.backgroundColor = "#d65630";
        newCategoryRef.current.style.color = "rgb(206, 228, 187)";
      } else {
        // Contrôle du trio OK

        setMessageNew("Effectuer les modifications et valider");
        document.getElementById("form-new-validation").disabled = false;
        newIngredientRef.current.style.backgroundColor = "whitesmoke";
        newIngredientRef.current.style.color = "rgb(37, 21, 11)";
        newQuantityRef.current.style.backgroundColor = "whitesmoke";
        newQuantityRef.current.style.color = "rgb(37, 21, 11)";
        newCategoryRef.current.style.backgroundColor = "whitesmoke";
        newCategoryRef.current.style.color = "rgb(37, 21, 11)";
      }
    }

    // arrayQuantities[qttId] = newQtt;
    // console.log("arrayQuantités :");
    // console.log(arrayQuantities);
    // setNewQuantities(arrayQuantities);
  };
  /////////////////////////////
  // Stockage des catégories
  /////////////////////////////
  const handleCategories = async (
    newCat,
    catId,
    newIngredientRef,
    newQuantityRef,
    newCategoryRef
  ) => {
    console.log("newCat Catégorie :");
    console.log(newCat);
    console.log("catId :" + catId);

    console.log("newCategoryRef :");
    console.log(newCategoryRef);

    console.log("newCategories avant ajout");
    console.log(newCategories);

    arrayNew = [...newCategories];
    console.log("arrayNew avant ajout :");
    console.log(arrayNew);
    arrayNew[catId] = newCat;

    console.log("arrayNew après ajout :");
    console.log(arrayNew);

    setNewCategories(arrayNew);
    console.log("newCategories après:");
    console.log(newCategories);

    // Contrôle du trio Ing / Qtt / Cat
    // if (newCategories[catId]) {
    console.log("catégorie renseignée : " + newCategories[catId]);

    if (!newIngredients[catId] || !newQuantities[catId]) {
      setMessageNew(
        "Saisir un ingrédient et une quantité pour chaque catégorie"
      );
      console.log("Saisir un ingrédient et une quantité pour chaque catégorie");
      document.getElementById("form-new-validation").disabled = "disabled";
      newIngredientRef.current.style.backgroundColor = "whitesmoke";
      newIngredientRef.current.style.color = "rgb(37, 21, 11)";

      newCategoryRef.current.style.backgroundColor = "whitesmoke";
      newCategoryRef.current.style.color = "rgb(37, 21, 11)";
    } else {
      // Contrôle du trio OK

      setMessageNew("Effectuer les modifications et valider");
      document.getElementById("form-new-validation").disabled = false;
      newIngredientRef.current.style.backgroundColor = "whitesmoke";
      newIngredientRef.current.style.color = "rgb(37, 21, 11)";
      newQuantityRef.current.style.backgroundColor = "whitesmoke";
      newQuantityRef.current.style.color = "rgb(37, 21, 11)";
      newCategoryRef.current.style.backgroundColor = "whitesmoke";
      newCategoryRef.current.style.color = "rgb(37, 21, 11)";
    }
    // }

    // arrayCategories[catId] = newCat;
    // console.log("arrayCategories :");
    // console.log(arrayCategories);
    // setNewCategories(arrayCategories);
  };
  /////////////////////////////
  // Stockage des étapes
  /////////////////////////////
  const handleSteps = (newStp, stpId) => {
    console.log("newStp Etape :");
    console.log(newStp);
    console.log("stpId :" + stpId);

    arrayNew = [...newSteps];
    console.log("arrayNew avant ajout :");
    console.log(arrayNew);
    arrayNew[stpId] = newStp;
    console.log("arrayNew après ajout :");
    console.log(arrayNew);

    setNewSteps(arrayNew);
    console.log("newSteps après:");
    console.log(newSteps);

    // arraySteps[stpId] = newStp;
    // console.log("arraySteps");
    // console.log(arraySteps);
    // setNewSteps(arraySteps);
    // console.log(newSteps);
  };
  ///////////////////////////
  // Reset du formulaire
  //////////////////////////
  const resetForm = () => {
    console.log("Réinit du formulaire");
    document.getElementById("new-form").reset();
  };

  ////////////////////////////////////////////////////////////////////////////
  // Contrôle Trio Ingrédient / Quantité / Catégorie avant modif BDD et Store
  //////////////////////////////////////////////////////////////////////////////
  const handleTrio = () => {
    //--------------------------------------
    console.log("handleTrio");

    for (let i = 0; i < 20; i++) {
      ////////// SI INGREDIENT RENSEIGNE, CONTROLE DE QUANTITE ET CATEGORIE /////////////////////
      if (newIngredients[i]) {
        if (!arrayQuantities[i] || !arrayCategories[i]) {
          setMessageNew(
            "Saisir une quantité et une catégorie pour chaque ingrédient"
          );
          console.log(
            "Saisir une quantité et une catégorie pour chaque ingrédient"
          );
          break; // arrête la boucle si un ingrédient n'a pas de quantité ou de catégorie
        }
      }
      //////////////////////
      ////////// SI QUANTITE RENSEIGNEE, CONTROLE DE INGREDIENT ET CATEGORIE /////////////////////
      if (arrayQuantities[i]) {
        if (!arrayIngredients[i] || !arrayCategories[i]) {
          setMessageNew(
            "Saisir un ingrédient et une catégorie pour chaque quantité"
          );
          console.log(
            "Saisir un ingrédient et une catégorie pour chaque quantité"
          );
          break; // arrête la boucle si un ingrédient n'a pas de quantité ou de catégorie
        }
      }
      //////////////////////
      ////////// SI CATEGORIE RENSEIGNEE, CONTROLE DE INGREDIENT ET QUANTITE /////////////////////
      if (arrayCategories[i]) {
        if (!arrayIngredients[i] || !arrayQuantities[i]) {
          setMessageNew(
            "Saisir un ingrédient et une quantité pour chaque catégorie"
          );
          console.log(
            "Saisir un ingrédient et une quantité pour chaque catégorie"
          );

          break; // arrête la boucle si un ingrédient n'a pas de quantité ou de catégorie
        }
      }

      //////////////////////
    }
    handleNew();
  };
  /////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////
  // --- Création dans le store et la BDD ---
  /////////////////////////////////////////////////////////////////////////////////

  const handleNew = () => {
    console.log("handleNew");

    // mettre à jour la BDD MongoDB et récupérer l'ID généré

    console.log("affichage AVANT BDD :");

    // Création d'une recette :

    axios.post("http://localhost:5000/recipe/complete", {
      title: newTitle,
      author: newAuthor,
      seasons: newSeasons,
      ingredients: newIngredients,
      quantities: newQuantities,
      categories: newCategories,
      steps: newSteps,
    });

    // // Réinitialiser le State de newRecipe
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
    dispatch(deleteNewRecipe());
  };

  /////////////////////////////////////////////////////////////////////////////////
  // --- Gestion du Submit pour la création dans le store et la BDD ---
  /////////////////////////////////////////////////////////////////////////////////
  const handleSubmitNew = (e) => {
    e.preventDefault();
    console.log("début SUBMIT");
    console.log("new Title / Author");
    console.log(newTitle);
    console.log(newAuthor);
    console.log("new Ing / Qtt / Cat / Stp");
    console.log(newIngredients);
    console.log(newQuantities);
    console.log(newCategories);
    console.log(newSteps);

    // Création d'une nouvelle recette dans le store
    console.log("Création d'une nouvelle recette dans le store");
    setMessageNew("Saisir les informations et valider");

    handleNew();

    const data = {
      title: newTitle,
      author: newAuthor,
      seasons: newSeasons,
      ingredients: newIngredients,
      quantities: newQuantities,
      categories: newCategories,
      steps: newSteps,
      _id: Date.now(),
    };

    // dispatch(createRecipe(data));

    //---------------------------------------------------------------------------------------------------------------------
    // Contrôle des inputs obligatoires : lorsqu'un ingrédient est renseigné, la quantité et la catégorie sont obligatoires
    // Si OK création Store et BDD
    //---------------------------------------------------------------------------------------------------------------------
    // handleTrio();
  };

  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      {displayNew && (
        <div className="recipe-new">
          <form onSubmit={handleSubmitNew} className="new-form" id="new-form">
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
              <button id="form-new-validation">Valider</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default RecipeNew;

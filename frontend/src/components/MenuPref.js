import React, { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";
import { useDispatch, useSelector } from "react-redux";
import {
  createMenuRecipe,
  resetMenuRecipes,
} from "../feature/menurecipes.slice";
import { setPref } from "../feature/pref.slice";
import { createCompo, resetCompo, setCompo } from "../feature/menucompo.slice";

const MenuPref = () => {
  const liste = useSelector((state) => state.listeRecipes.listeData);

  const prefSelected = useSelector((state) => state.prefSelect.prefSelected);
  const compoListeMenu = useSelector((state) => state.menuCompo.compoListe);
  const selectedRecipes = useSelector(
    (state) => state.menuRecipes.menuRecipesData
  );
  let selectedRecipesId = selectedRecipes.map((recipe) => recipe._id);

  let arrayW = [];
  let arrayNew = [];

  let dateDefault = new Date().toISOString().substring(0, 10);
  let nextdayFormat = new Date().toISOString().substring(0, 10);

  const dispatch = useDispatch();

  // // Initialisation des recettes du Menu du store
  // dispatch(resetMenuRecipes());
  // selectedRecipesId = [];

  // Initialisation de la date du jour et mémorisation dans la valeur par défaut de dayOne
  if (!prefSelected[2]) {
    console.log("*******************************************");
    console.log("Initialisation de la date de début");
    console.log("*******************************************");
    arrayNew = ["7", "2", dateDefault];
    dispatch(setPref(arrayNew));
  } else {
    console.log("*******************************************");
    console.log("Préférences prises en compte");
    console.log("*******************************************");
  }
  console.log("prefSelected nb de jours : " + prefSelected[0]);
  console.log("prefSelected nb repas/j : " + prefSelected[1]);
  console.log("prefSelected dayOne : " + prefSelected[2]);
  console.log("*******************************************");

  ////////////////////////////////////////////////////////////////////
  //******************************************************************
  // Sélection d'une liste aléatoire de recettes selon les préférences nb de jours prefSelected[0] et nb de repas/jour prefSelected[1]
  //******************************************************************
  ////////////////////////////////////////////////////////////////////
  const handlePref = (prefSelected) => {
    console.log("handlePref");
    /////////////////////////////////////////////////////////////////////////////
    // Calcul du nombre de recettes à sélectionner : nb de jours * nb de repas/j
    /////////////////////////////////////////////////////////////////////////////
    const numRecipes = prefSelected[0] * prefSelected[1];
    arrayW = [];
    console.log("numRecipes : " + numRecipes);
    console.log("prefSelected");
    console.log(prefSelected);

    let firstday = new Date(prefSelected[2]);
    let nextday = new Date(prefSelected[2]);
    ////////////////////////////////////////
    // Initialisation du tableau des jours
    ////////////////////////////////////////
    for (let i = 0; i < prefSelected[0]; i++) {
      nextday.setDate(firstday.getDate() + i);
      console.log("*** calcul des jours *** index : " + i);

      console.log("nextday : " + nextday);
      // nextdayFormat = nextday.toISOString().substring(0, 10);
      nextdayFormat = nextday.toLocaleDateString("fr-FR");
      arrayW.push(nextdayFormat);
      if (prefSelected[1] === "1") {
        dispatch(createCompo([i, 1, nextdayFormat, "meal1", null]));
      } else {
        dispatch(createCompo([i, 2, nextdayFormat, "meal1", "meal2"]));
      }
      console.log("nextdayFormat : " + nextdayFormat);
    }

    /////////////////////////////////////////////////////
    // Constitution de la liste de recettes aléatoires
    /////////////////////////////////////////////////////
    let i = 0;

    if (liste.length < numRecipes) {
      console.log(
        "*************************************************************"
      );
      console.log(
        "********ATTENTION, PAS ASSEZ DE RECETTES DANS LA LISTE ******"
      );
      console.log(
        "*************************************************************"
      );
      console.log("Nbre de Recettes total : " + liste.length);
    } else {
      console.log("Nbre de Recettes total : " + liste.length);
    }
    while (arrayW.length < numRecipes && i < 9000) {
      const randomIndex = Math.floor(Math.random() * liste.length);
      const randomRecipe = liste[randomIndex];
      if (!selectedRecipesId.includes(randomRecipe._id)) {
        console.log("Id à sélectionner : " + i + " / " + randomRecipe._id);
        arrayW.push(randomRecipe);
        dispatch(createMenuRecipe(randomRecipe));

        selectedRecipesId.push(randomRecipe._id);
      } else {
        console.log("Id déja inclus : " + i + " / " + randomRecipe._id);
      }
      i++;
    }
    console.log("arrayW");
    console.log(arrayW);

    // selectedRecipes = [...arrayW];
    if (i === 9000) {
      console.log("boucle infinie");
    }
  };

  /////////////////////////////////////////////////////////////////////
  useEffect(() => {
    console.log("*******************************************");
    console.log("useEffect prise en compte PREFERENCES");
    console.log("*******************************************");

    dispatch(resetMenuRecipes());
    dispatch(resetCompo());
    selectedRecipesId = [];
    arrayW = [];
    handlePref(prefSelected);
  }, [prefSelected]);

  return (
    <div className="dayscards-liste">
      {compoListeMenu &&
        compoListeMenu
          .slice()
          .map((compo) => (
            <MenuCard
              key={compo[0]}
              compo={compo}
              prefSelected={prefSelected}
            />
          ))}
    </div>
  );
};

export default MenuPref;

import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getListe } from "../feature/liste.slice";
import { setChecked } from "../feature/checked.slice";

const ListeRecettes = () => {
  const dispatch = useDispatch();
  const liste = useSelector((state) => state.listeRecipes.listeData);
  const sortSelected = useSelector((state) => state.sortSelect.sortSelected);

  // Récupération de la liste de recettes dans la BDD et dispatch dans le store
  useEffect(() => {
    axios
      .get("http://localhost:5000/recipe/")
      .then((res) => dispatch(getListe(res.data)));
  }, []);

  ///////////////////////////////////////
  // Stockage de la Recette Sélectionnée
  ///////////////////////////////////////
  // const handleRecipeChecked = (checkBox, checkedRec) => {
  //   console.log(checkBox);
  //   console.log(checkedRec);
  //   if (document.getElementById(checkBox).checked === true) {
  //     console.log("checked");
  //     dispatch(setChecked(checkedRec));
  //   } else {
  //     console.log("décochée");
  //     dispatch(setChecked([]));
  //   }
  // };

  ////////////////////
  ///// ACTIONS
  //////////////////////

  const handleDelete = () => {
    console.log("suppression");
  };
  const handleEdit = () => {
    console.log("modif");
  };
  const handleDetails = () => {
    console.log("détails");
  };

  return (
    <div className="recipescards-liste">
      {liste &&
        liste
          .slice()
          .filter((recipe) => {
            if (sortSelected[0] === "Saison") {
              if (recipe.seasons.includes(sortSelected[1])) {
                console.log("Tri Saison filter : " + sortSelected[1]);
                return recipe;
              }
            } else if (sortSelected[0] === "MotClé") {
              if (
                recipe.title
                  .toLowerCase()
                  .includes(sortSelected[1].toLowerCase()) ||
                recipe.ingredients.some((ingr) =>
                  ingr.toLowerCase().includes(sortSelected[1].toLowerCase())
                )
              ) {
                console.log(
                  "Tri Mot-Clé  filter titre et ingrédients: " + sortSelected[1]
                );
                return recipe;
              }
            } else {
              return recipe;
            }
          })
          .sort((a, b) => {
            switch (sortSelected[0]) {
              case "Croissant":
                return b.title.localeCompare(a.title);
              case "Decroissant":
                return a.title.localeCompare(b.title);
              default:
                null;
            }
          })
          .map((recipe) => (
            <RecipeCard
              key={recipe._id}
              recipe={recipe}
              // handleDetails={handleDetails}
            />
          ))}
    </div>
  );
};

export default ListeRecettes;

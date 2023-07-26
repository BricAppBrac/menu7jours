import React, { useEffect } from "react";
import RecipeCardProtect from "../components/RecipeCardProtect";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getListe } from "../feature/liste.slice";
import { setSort } from "../feature/sort.slice";

const ListeRecettesProtect = () => {
  const dispatch = useDispatch();
  const liste = useSelector((state) => state.listeRecipes.listeData);
  const sortSelected = useSelector((state) => state.sortSelect.sortSelected);

  // Récupération de la liste de recettes dans la BDD et dispatch dans le store
  useEffect(() => {
    axios
      .get("http://localhost:5000/recipe/")
      .then((res) => dispatch(getListe(res.data)))
      .then(() => dispatch(setSort(["Croissant", null, null])));
  }, []);

  return (
    <div className="recipescards-liste">
      {liste &&
        liste
          .slice()
          //////////////////////////////////
          // TRI sur la SAISON
          /////////////////////////////////
          .filter((recipe) => {
            // saison renseignée et différente de "saison" => une saison précise
            if (
              sortSelected[1] &&
              sortSelected[1] !== "saison" &&
              sortSelected[1] !== "toutes"
            ) {
              if (recipe.seasons.includes(sortSelected[1])) {
                return recipe;
              }
            }
            // recette toute saison : recette avec les saisons toutes cochées ou aucune
            else if (sortSelected[1] === "toutes") {
              if (
                (recipe.seasons.includes("printemps") &&
                  recipe.seasons.includes("été") &&
                  recipe.seasons.includes("automne") &&
                  recipe.seasons.includes("hiver")) ||
                recipe.seasons.length === 0
              ) {
                return recipe;
              }
            }
            // saison non renseignée dans la barre de tri => n'importe quelle saison, on renvoie toutes les recettes
            else {
              return recipe;
            }
          })
          ///////////////////////////////
          // TRI sur le MOT-CLE
          ///////////////////////////////
          .filter((recipe) => {
            if (sortSelected[2]) {
              if (
                // normalisation du mot-clé et du titre pour comparer
                // sans les accents
                recipe.title
                  .normalize("NFD")
                  .replace(/\p{Diacritic}/gu, "")
                  .toUpperCase()
                  .includes(
                    sortSelected[2]
                      .normalize("NFD")
                      .replace(/\p{Diacritic}/gu, "")
                      .toUpperCase()
                  ) ||
                recipe.ingredients.some((ingr) =>
                  ingr
                    .normalize("NFD")
                    .replace(/\p{Diacritic}/gu, "")
                    .toUpperCase()
                    .includes(
                      sortSelected[2]
                        .normalize("NFD")
                        .replace(/\p{Diacritic}/gu, "")
                        .toUpperCase()
                    )
                )
              ) {
                return recipe;
              }
            } else {
              return recipe;
            }
          })
          //////////////////////////////////////////
          // TRI CROISSANT ou DECROISSANT
          /////////////////////////////////////////
          .sort((a, b) => {
            switch (sortSelected[0]) {
              case "Decroissant":
                return b.title.localeCompare(a.title);
              case "Croissant":
                return a.title.localeCompare(b.title);
              default:
                console.log("Cas qui ne devrait pas arriver");
            }
          })
          .map((recipe) => (
            <RecipeCardProtect key={recipe._id} recipe={recipe} />
          ))}
    </div>
  );
};

export default ListeRecettesProtect;

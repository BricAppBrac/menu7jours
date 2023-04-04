import React, { useEffect } from "react";
import RecipeCardProtect from "../components/RecipeCardProtect";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getListe } from "../feature/liste.slice";

const ListeRecettesProtect = () => {
  const dispatch = useDispatch();
  const liste = useSelector((state) => state.listeRecipes.listeData);
  const sortSelected = useSelector((state) => state.sortSelect.sortSelected);

  // Récupération de la liste de recettes dans la BDD et dispatch dans le store
  useEffect(() => {
    axios
      .get("http://localhost:5000/recipe/")
      .then((res) => dispatch(getListe(res.data)));
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
            if (sortSelected[1] && sortSelected[1] !== "saison") {
              if (recipe.seasons.includes(sortSelected[1])) {
                console.log("Tri Saison filter : " + sortSelected[1]);
                return recipe;
              }
            } else return recipe;
          })
          ///////////////////////////////
          // TRI sur le MOT-CLE
          ///////////////////////////////
          .filter((recipe) => {
            if (sortSelected[2]) {
              if (
                recipe.title
                  .toLowerCase()
                  .includes(sortSelected[2].toLowerCase()) ||
                recipe.ingredients.some((ingr) =>
                  ingr.toLowerCase().includes(sortSelected[2].toLowerCase())
                )
              ) {
                console.log(
                  "Tri Mot-Clé  filter titre et ingrédients: " + sortSelected[2]
                );
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
                null;
            }
          })
          .map((recipe) => (
            <RecipeCardProtect key={recipe._id} recipe={recipe} />
          ))}
    </div>
  );
};

export default ListeRecettesProtect;

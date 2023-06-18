import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setChecked } from "../feature/checked.slice";
import { createRecipe } from "../feature/recipe.slice";

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [message, setMessage] = useState("");

  const handleDetails = () => {
    console.log("handleDetails");
    console.log(recipe.title);
    dispatch(setChecked(recipe));
    dispatch(createRecipe(recipe));
    console.log("après dispatch setChecked et createRecipe");
    // navigate("/pagedetailsrecipe");
  };

  return (
    <div className="recipe-card">
      <div className="recipe-card-content">
        <h3>{recipe.title}</h3>

        <h4>Ingrédients principaux: </h4>
        <div className="ingredients-liste">
          <p>{recipe.ingredients[0] ? recipe.ingredients[0] : ""}</p>
          <p>{recipe.ingredients[1] ? " / " + recipe.ingredients[1] : ""}</p>
          <p>{recipe.ingredients[2] ? " / " + recipe.ingredients[2] : ""}</p>
          <p>{recipe.ingredients[3] ? " / " + recipe.ingredients[3] : ""}</p>
          <p>{recipe.ingredients[4] ? " / " + recipe.ingredients[4] : ""}</p>
        </div>
        <div className="checkbox-container">
          <div className="box-details" onClick={() => handleDetails()}>
            <NavLink to="/pagedetailsrecipe">
              <i className="fa fa-sharp fa-solid fa-circle-info"></i>
            </NavLink>
          </div>

          {/* <div className="box-message">
            <p>{message}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

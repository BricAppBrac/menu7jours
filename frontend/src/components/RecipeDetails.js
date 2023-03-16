import React, { useState } from "react";

const RecipeDetails = () => {
  const [displayDetails, setDisplayDetails] = useState(true);

  return (
    <>
      {displayDetails && (
        <div className="recipe-details">
          <h4>Recette complète</h4>

          <form onSubmit={handleForm} className="details-form">
            <div className="details-input">
              <label htmlFor="detailsTitle">Titre de la Recette</label>
              <input
                name="detailsTitle"
                // required
                type="text"
                className="details"
                id="detailsTitle"
                // value={userEmail}
                // onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="details-input">
              <label htmlFor="detailsIngredients">Ingrédients</label>
              <input
                name="detailsIngredients"
                type="text"
                className="details"
                id="detailsIngredients"
                // value={userPassword}
                // onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>

            <button>Submit</button>
          </form>
        </div>
      )}
    </>
  );
};

export default RecipeDetails;

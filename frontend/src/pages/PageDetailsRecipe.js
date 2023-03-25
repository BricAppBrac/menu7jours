import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RecipeDetailsProtect from "../components/RecipeDetailsProtect";
import SignUp from "../components/SignUp";

const PageDetailsRecipe = () => {
  return (
    <div className="pagedetailsrecipe">
      <div className="details-navbar">
        <Navbar />
        <SignUp />
      </div>
      <div className="details-content">
        <div className="details-text">
          <h1>Détails de la Recette</h1>
          <RecipeDetailsProtect />
        </div>
      </div>
      <div className="details-footer">
        <Footer />
      </div>
    </div>
  );
};

export default PageDetailsRecipe;

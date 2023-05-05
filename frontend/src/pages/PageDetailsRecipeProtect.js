import React from "react";
import Footer from "../components/Footer";
import NavbarProtect from "../components/NavbarProtect";
import RecipeDetailsProtect from "../components/RecipeDetailsProtect";
import SignUp from "../components/SignUp";

const PageDetailsRecipeProtect = () => {
  return (
    <div className="pagedetailsrecipe">
      <div className="details-navbar">
        <NavbarProtect />
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

export default PageDetailsRecipeProtect;

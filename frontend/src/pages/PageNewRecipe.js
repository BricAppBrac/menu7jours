import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RecipeNew from "../components/RecipeNew";
import SignUp from "../components/SignUp";

const PageNewRecipe = () => {
  return (
    <div className="pagenewrecipe">
      <div className="new-navbar">
        <Navbar />
        <SignUp />
      </div>
      <div className="new-content">
        <div className="new-text">
          <h1>Nouvelle Recette</h1>
          <RecipeNew />
        </div>
      </div>
      <div className="new-footer">
        <Footer />
      </div>
    </div>
  );
};

export default PageNewRecipe;

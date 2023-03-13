import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";
import SignUp from "../components/SignUp";

const HomeListeRecettes = () => {
  return (
    <div className="homelisterecettes">
      <div className="nav-container">
        <Navbar />
        <SignUp />
      </div>
      <div className="homeliste-content">
        <div className="homeliste-text">
          <h1>Liste des Recettes</h1>
          <h2>Ajouter une Recette | Modifier | Supprimer | Trier </h2>

          <div className="recipescards-container">
            <RecipeCard />
          </div>
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default HomeListeRecettes;

import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ListeRecettesProtect from "../components/ListeRecettesProtect";
import SignUp from "../components/SignUp";

import SortNavbarProtect from "../components/SortNavbarProtect";

const HomeListeRecettesSecurisee = () => {
  return (
    <div className="homelisterecettes">
      <div className="nav-container">
        <Navbar />
        <SignUp />
      </div>
      <div className="homeliste-content">
        <div className="homeliste-text">
          <h1>Liste des Recettes</h1>
          <h2>pour la constitution des Menus</h2>
          <SortNavbarProtect />

          <div className="recipescards-container">
            <ListeRecettesProtect />
          </div>
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default HomeListeRecettesSecurisee;

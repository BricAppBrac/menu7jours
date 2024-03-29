import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ListeRecettes from "../components/ListeRecettes";
import SignUp from "../components/SignUp";
import SortNavbar from "../components/SortNavbar";
import { NavLink } from "react-router-dom";

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
          <h2>pour la constitution des Menus</h2>
          {/* A SUPPRIMER */}
          <h2>
            <NavLink to="/PrivateRoute/HomeListeRecettesProtect">
              Provisoire
            </NavLink>
          </h2>
          {/* ////////////////// */}
          <SortNavbar />
          <div className="recipescards-container">
            <ListeRecettes />
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

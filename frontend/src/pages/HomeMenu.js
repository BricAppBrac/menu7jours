import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuCard from "../components/MenuCard";

const HomeMenu = () => {
  return (
    <div className="homemenu">
      <div className="nav-container">
        <Navbar />
      </div>
      <div className="homemenu-content">
        <div className="homemenu-text">
          <h1>Menu de la semaine</h1>
          <h2>Préférences | Modifier | Changer | Valider </h2>

          <div className="menucard-container">
            <MenuCard />
          </div>
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default HomeMenu;

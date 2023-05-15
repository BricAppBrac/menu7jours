import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuPref from "../components/MenuPref";
import MenuPrefNavbarProtect from "../components/MenuPrefNavbarProtect";

const HomeMenu = () => {
  return (
    <div className="homemenu">
      <div className="nav-container">
        <Navbar />
      </div>
      <div className="homemenu-content">
        <div className="homemenu-text">
          <h1>Menu de la semaine</h1>
          <MenuPrefNavbarProtect />
          <div className="menucard-container">
            <MenuPref />
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

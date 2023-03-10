import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div class="nav-container">
        <div class="logo">
          <div className="imglogo"></div>

          <ul>
            <li>
              <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Liste des Recettes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/homemenu"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Menu de la semaine
              </NavLink>
            </li>
          </ul>
          <div className="nav-buttons">
            <button>Inscription gratuite</button>
            <button>Espace perso</button>
            <button>
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
            <span>en préparation</span>
          </div>
          <h3>Une application BricAppBrac qui simplifie la vie</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div class="footer-container1">
        <div class="liens-footer">
          <ul>
            <li>
              <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Accueil
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
        </div>
        <div class="mentions-footer">
          <ul>
            <li>
              <NavLink
                to="/mentions-legales"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Mentions Légales
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/plan-du-site"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                Plan du site
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="contact-footer">
          <li>
            <NavLink
              to="/contact"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </div>
      </div>
      <div className="footer-container2">
        <div className="lgs">
          <h3>BricAppBrac </h3>
        </div>
        <div className="copyright">
          <h3>2023 © Copyright - Tous droits réservés</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

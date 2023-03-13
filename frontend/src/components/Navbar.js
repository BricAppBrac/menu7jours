import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setSignUp, setCloseUp } from "../feature/signUp.slice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    dispatch(setSignUp(true));
    dispatch(setCloseUp(false));
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
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
            <button onClick={() => handleSignUp()}>Inscription gratuite</button>
            <button onClick={() => console.log("signIn")}>Espace perso</button>
            <button onClick={() => console.log("fonction logout")}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
            {/* <span>en préparation</span> */}
          </div>
          <h3>Une application BricAppBrac qui simplifie la vie</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

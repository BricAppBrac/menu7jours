import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setSort } from "../feature/sort.slice";

const SortNavbarProtect = () => {
  const dispatch = useDispatch();

  ///////////////////
  //// TRIS
  /////////////////

  const handleTriMotCle = (motcle) => {
    console.log("Tri sur Mot-Clé : ");
    console.log(motcle);
    dispatch(setSort(["MotClé", motcle]));
  };

  const handleTriCroissant = () => {
    console.log("Tri croissant");
    dispatch(setSort(["Croissant", null]));
  };

  const handleTriDecroissant = () => {
    console.log("Tri décroissant");
    dispatch(setSort(["Decroissant", null]));
  };

  const handleTriSaison = (season) => {
    console.log("Tri saison : " + season);
    dispatch(setSort(["Saison", season]));
  };

  return (
    <div className="sort-nav">
      <div className="sort-nav-container">
        <p>
          <i className="fa-solid fa-chevron-right"></i>
          &nbsp;TRIS:{" "}
        </p>
        <ul>
          <li>
            mot-clé :
            <input
              type="text"
              id="motclé"
              placeholder="mot-clé"
              onChange={(e) => {
                handleTriMotCle(e.target.value);
              }}
            ></input>
          </li>
          <li onClick={handleTriCroissant}>ordre croissant</li>
          <li onClick={handleTriDecroissant}>ordre décroissant</li>
          <li
            onClick={(e) => {
              handleTriSaison(e.target.value);
            }}
          >
            saison :
            <select>
              <option value="saison">sélectionner</option>
              <option value="printemps">printemps</option>
              <option value="été">été</option>
              <option value="automne">automne</option>
              <option value="hiver">hiver</option>
            </select>
          </li>
        </ul>
      </div>
      <div className="new-container">
        <p>
          <NavLink
            to="/PrivateRoute/pagenewrecipe"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <i className="fa-solid fa-chevron-right"></i>
            Nouvelle Recette
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SortNavbarProtect;

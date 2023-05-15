import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPref } from "../feature/pref.slice";

const MenuPrefNavbarProtect = () => {
  const dispatch = useDispatch();
  const prefSelected = useSelector((state) => state.prefSelect.prefSelected);

  let arrayNew = [];
  let dateDefault = new Date().toISOString().substring(0, 10);

  ///////////////////
  //// PREFERENCES
  /////////////////

  const handleDaysNb = (daysNb) => {
    arrayNew = [...prefSelected];
    arrayNew[0] = daysNb;
    dispatch(setPref(arrayNew));
    arrayNew = [];
  };

  const handleMealsNb = (mealsNb) => {
    arrayNew = [...prefSelected];
    arrayNew[1] = mealsNb;
    dispatch(setPref(arrayNew));
    arrayNew = [];
  };

  const handleDayOne = (dayOne) => {
    arrayNew = [...prefSelected];
    arrayNew[2] = dayOne;
    dispatch(setPref(arrayNew));
    arrayNew = [];
  };

  return (
    <div className="pref-nav">
      <div className="pref-nav-container">
        <p>
          <i className="fa-solid fa-chevron-right"></i>
          &nbsp;PREFERENCES:
        </p>
        <ul>
          <li
            onChange={(e) => {
              handleDaysNb(e.target.value);
            }}
          >
            Nb de jours :
            <select defaultValue={"7"}>
              <option value="daysNb">sélectionner</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </li>

          <li
            onChange={(e) => {
              handleMealsNb(e.target.value);
            }}
          >
            Nb de repas/j :
            <select defaultValue={"2"}>
              <option value="mealsNb">sélectionner</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </li>

          <li
            onChange={(e) => {
              handleDayOne(e.target.value);
            }}
          >
            Date 1er jour :
            <input type="date" defaultValue={dateDefault} />
          </li>
        </ul>
      </div>
      {/* <div className="other-container">
        <p>
          <NavLink
            to="/PrivateRoute/pagenewrecipe"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <i className="fa-solid fa-chevron-right"></i>
            Nouvelle Recette{" "}
            <i id="plusicon" className="fa-solid fa-square-plus"></i>
          </NavLink>
        </p>
      </div> */}
    </div>
  );
};

export default MenuPrefNavbarProtect;

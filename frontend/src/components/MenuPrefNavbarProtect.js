import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPref } from "../feature/pref.slice";
import { NavLink } from "react-router-dom";

const MenuPrefNavbarProtect = (props) => {
  const dispatch = useDispatch();
  const prefSelected = useSelector((state) => state.prefSelect.prefSelected);

  let arrayNew = [];
  let dateDefault = prefSelected[2]
    ? prefSelected[2]
    : new Date().toISOString().substring(0, 10);

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
          &nbsp;Préférences:
        </p>
        <ul>
          <li
            onChange={(e) => {
              handleDaysNb(e.target.value);
            }}
          >
            Nb de jours:
            {/* <select defaultValue={"7"}> */}
            <select defaultValue={prefSelected[0]}>
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
            Nb de repas/j:
            {/* <select defaultValue={"2"}> */}
            <select defaultValue={prefSelected[1]}>
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
            Date 1er jour:
            <input type="date" defaultValue={dateDefault} />
          </li>
        </ul>
        <div className="valid-container">
          <NavLink
            to="/menusvalides"
            // className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <i className="fa-solid fa-chevron-right"></i>
            Consulter les Menus validés:&nbsp;
            <button>
              <i id="validicon" className="fa-solid fa-file"></i>
            </button>
          </NavLink>
        </div>
        <div className="box-options">
          <div className="box-change-menu">
            <p>
              <i className="fa-solid fa-chevron-right"></i>
              &nbsp;Changer le Menu:&nbsp;
            </p>
            <button onClick={() => props.handleChangeMenu()}>
              <i className="fa-solid fa-rotate-left"></i>
            </button>
          </div>
          <div className="box-valide-menu">
            <p>
              <i className="fa-solid fa-chevron-right"></i>
              &nbsp;Valider le Menu:&nbsp;
            </p>
            <button onClick={() => props.handleValideMenu()}>
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPrefNavbarProtect;

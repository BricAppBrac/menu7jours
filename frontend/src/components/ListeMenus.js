import React, { useEffect } from "react";
import MenusListeCard from "../components/MenusListeCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getListeMenus } from "../feature/menusliste.slice";
import { setSortMenus } from "../feature/sortmenus.slice";

const ListeMenus = () => {
  const dispatch = useDispatch();
  const listemenus = useSelector((state) => state.listeMenus.menusData);
  const sortSelectedMenus = useSelector(
    (state) => state.sortSelectMenus.sortSelectedMenus
  );
  const prefSelected = useSelector((state) => state.prefSelect.prefSelected);

  // Récupération de la liste de recettes dans la BDD et dispatch dans le store
  useEffect(() => {
    axios
      .get("http://localhost:5000/menu/")
      .then((res) => dispatch(getListeMenus(res.data)))
      .then(() => dispatch(setSortMenus(["Croissant", null])));
  }, []);

  return (
    <div className="menuscards-liste">
      {listemenus &&
        listemenus
          .slice()

          ///////////////////////////////
          // TRI sur le Jour
          ///////////////////////////////
          .filter((menu) => {
            // tri selon jour demandé

            if (sortSelectedMenus[1]) {
              console.log(
                "sortSelectedMenus[1] rens : " + sortSelectedMenus[1]
              );
              console.log("menu.menuJ : ");
              console.log(menu.menuJ);

              // **** GESTION FORMAT DATE **********************************

              let selectedDayFormat = new Date(sortSelectedMenus[1]);
              let dayFormat = new Date().toISOString().substring(0, 10);
              dayFormat = selectedDayFormat.toLocaleDateString("fr-FR");
              console.log("dayFormat");
              console.log(dayFormat);
              //********************************** */
              // Verif si date incluse dans le tableau MenuJ
              //****************************************** */

              for (let i = 0; i < menu.prefNbJ; i++) {
                console.log("menu.menuJ[i] / i : " + i);
                console.log(menu.menuJ[i]);
                if (menu.menuJ[i].includes(dayFormat)) {
                  console.log("date inclue");
                  return menu;
                } else {
                  console.log("date NON inclue");
                }
              }
            } else {
              console.log(
                "sortSelectedMenus[1] non rens : " + sortSelectedMenus[1]
              );
              return menu;
            }
          })
          //////////////////////////////////////////
          // TRI CROISSANT ou DECROISSANT
          /////////////////////////////////////////
          .sort((a, b) => {
            switch (sortSelectedMenus[0]) {
              case "Decroissant":
                return b.prefDayOne.localeCompare(a.prefDayOne);
              case "Croissant":
                return a.prefDayOne.localeCompare(b.prefDayOne);
              default:
                null;
            }
          })
          .map((menu) => <MenusListeCard key={menu._id} menu={menu} />)}
    </div>
  );
};

export default ListeMenus;

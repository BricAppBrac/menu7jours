import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import IngredientCardEdit from "./IngredientCardEdit";
import { editRecipe } from "../feature/liste.slice";

const DétailsEdit = () => {
  const [displayEdit, setDisplayEdit] = useState(true);
  const [messageEdit, setMessageEdit] = useState(
    "Effectuer les modifications et valider"
  );

  const [displayIngredients, setDisplayIngredients] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ]);

  const [displaySteps, setDisplaySteps] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ]);
  // Valeurs initiales de la recette
  const checkedRecipe = useSelector((state) => state.checkedRec.checkedRecipe);

  // Dernières valeurs saisies
  const [editTitle, setEditTitle] = useState(checkedRecipe.title);
  const [editAuthor, setEditAuthor] = useState("Melissande");
  const [editSeasons, setEditSeasons] = useState(checkedRecipe.seasons);
  const [editIngredients, setEditIngredients] = useState(
    checkedRecipe.ingredients
  );
  const [editQuantities, setEditQuantities] = useState(
    checkedRecipe.quantities
  );
  const [editCategories, setEditCategories] = useState(
    checkedRecipe.categories
  );
  const [editSteps, setEditSteps] = useState(checkedRecipe.steps);

  const dispatch = useDispatch();

  let arrayNew = [];
  let arrayW = [];

  // let arrayIngredients = editIngredients;
  // let arrayQuantities = editQuantities;
  // let arrayCategories = editCategories;
  // let arraySteps = editSteps;

  //////////////////////////////////////////////////////////////////////////////////
  // Gestion des inputs
  ////////////////////////////////////////////////////
  /////////////////////////////
  // Stockage du titre
  /////////////////////////////
  const handleTitle = (updateTitle) => {
    //--------------------------------------
    // e.preventDefault();
    console.log("update Title :");
    console.log(updateTitle);

    setEditTitle(updateTitle);
  };
  ////////////////////////////
  // Stockage des saisons
  ///////////////////////
  const handleSeasons = (newSeas) => {
    //-------------------------------------
    if (document.getElementById(newSeas).checked == true) {
      console.log("checked");
      arrayNew = editSeasons;
      arrayW.push(newSeas);
      arrayNew = [...arrayNew, ...arrayW];
    } else {
      console.log("décochée");
      arrayW = editSeasons;
      arrayNew = arrayW.filter(function (element) {
        return element !== newSeas;
      });
    }
    console.log("Seasons array");
    console.log(arrayNew);
    setEditSeasons(arrayNew);
    arrayNew = [];
    arrayW = [];
  };
  /////////////////////////////
  // Stockage des ingrédients
  /////////////////////////////
  const handleIngredients = (newVal, ingId, editIngredientRef) => {
    //--------------------------------------
    console.log("newVal Ingrédient :");
    console.log(newVal);
    console.log("ingId :" + ingId);
    console.log("editIngredientRef :");
    console.log(editIngredientRef);
    console.log("editIngredients avant splice");
    console.log(editIngredients);
    arrayNew = [...editIngredients];

    // if (editIngredients[ingId]) {
    //   console.log("ingrédient renseigné : " + editIngredients[ingId]);
    //   arrayW = arrayNew.splice(ingId, 1, newVal);
    // } else {
    //   arrayW.push(newVal);
    //   arrayNew = [...arrayNew, ...arrayW];
    // }

    if (editIngredients[ingId]) {
      console.log("ingrédient renseigné : " + editIngredients[ingId]);

      if (newVal === null || newVal.length === 0 || newVal === undefined) {
        setMessageEdit("Saisir un ingrédient");
        document.getElementById("form-validation").disabled = "disabled";
        editIngredientRef.current.style.backgroundColor = "#d65630";
        editIngredientRef.current.style.color = "rgb(206, 228, 187)";
      } else {
        setMessageEdit("Effectuer les modifications et valider");
        arrayW = arrayNew.splice(ingId, 1, newVal);
        document.getElementById("form-validation").disabled = false;
        editIngredientRef.current.style.backgroundColor = "whitesmoke";
        editIngredientRef.current.style.color = "rgb(37, 21, 11)";
      }
    } else {
      console.log("ingrédient NON renseigné : " + editIngredients[ingId]);
      arrayW.push(newVal);
      arrayNew = [...arrayNew, ...arrayW];
    }

    setEditIngredients(arrayNew);
    console.log("editIngredients après modif:");
    console.log(editIngredients);
    arrayW = [];
    arrayNew = [];
  };

  /////////////////////////////
  // Stockage des quantités
  /////////////////////////////
  const handleQuantities = (newQtt, qttId, editQuantityRef) => {
    //--------------------------------------
    console.log("handleQuantities :");
    console.log("newQtt : " + newQtt);
    console.log("qttId :" + qttId);
    console.log("editQuantityRef :");
    console.log(editQuantityRef);
    console.log("editQuantities avant splice");
    console.log(editQuantities);
    arrayNew = [...editQuantities];

    if (editQuantities[qttId]) {
      console.log("quantité renseignée : " + editQuantities[qttId]);

      if (newQtt === null || newQtt.length === 0 || newQtt === undefined) {
        setMessageEdit("Saisir une quantité");
        document.getElementById("form-validation").disabled = "disabled";
        editQuantityRef.current.style.backgroundColor = "#d65630";
        editQuantityRef.current.style.color = "rgb(206, 228, 187)";
      } else {
        setMessageEdit("Effectuer les modifications et valider");
        arrayW = arrayNew.splice(qttId, 1, newQtt);
        document.getElementById("form-validation").disabled = false;
        editQuantityRef.current.style.backgroundColor = "whitesmoke";
        editQuantityRef.current.style.color = "rgb(37, 21, 11)";
      }
    } else {
      console.log("quantité NON renseignée : " + editQuantities[qttId]);
      arrayW.push(newQtt);
      arrayNew = [...arrayNew, ...arrayW];
    }

    setEditQuantities(arrayNew);
    console.log("editQuantities après modif:");
    console.log(editQuantities);
    arrayW = [];
    arrayNew = [];
  };
  /////////////////////////////
  // Stockage des catégories
  /////////////////////////////
  const handleCategories = (newCat, catId, editCategoryRef) => {
    //--------------------------------------
    console.log("newCat Catégorie :");
    console.log(newCat);
    console.log("catId :" + catId);
    console.log("editCategoryRef :");
    console.log(editCategoryRef);
    console.log("editCategories avant splice");
    console.log(editCategories);
    arrayNew = [...editCategories];

    if (editCategories[catId]) {
      arrayW = arrayNew.splice(catId, 1, newCat);
    } else {
      arrayW.push(newCat);
      arrayNew = [...arrayNew, ...arrayW];
    }

    setEditCategories(arrayNew);
    console.log("editCategories après modif :");
    console.log(editCategories);
    arrayW = [];
    arrayNew = [];
  };
  /////////////////////////////
  // Stockage des étapes
  /////////////////////////////
  const handleSteps = (newStp, stpId) => {
    //--------------------------------------
    console.log("newStp Etape :");
    console.log(newStp);
    console.log("stpId :" + stpId);
    console.log("editSteps avant splice");
    console.log(editSteps);
    arrayNew = [...editSteps];

    if (editSteps[stpId]) {
      console.log("arrayNew");
      console.log(arrayNew);
      arrayW = arrayNew.splice(stpId, 1, newStp);
      console.log("arrayW");
      console.log(arrayW);
    } else {
      arrayW.push(newStp);
      arrayNew = [...arrayNew, ...arrayW];
    }
    setEditSteps(arrayNew);
    console.log("editSteps après modif");
    console.log(editSteps);
    arrayW = [];
    arrayNew = [];
  };

  ////////////////////////////////////////////////////////////////////////////
  // Contrôle Trio Ingrédient / Quantité / Catégorie avant modif BDD et Store
  //////////////////////////////////////////////////////////////////////////////
  // const handleTrio = () => {
  //   //--------------------------------------
  //   console.log("handleTrio");

  //   for (let i = 0; i < 20; i++) {
  //     ////////// SI INGREDIENT RENSEIGNE, CONTROLE DE QUANTITE ET CATEGORIE /////////////////////
  //     if (editIngredients[i]) {
  //       if (!editQuantities[i] || !editCategories[i]) {
  //         setMessageEdit(
  //           "Saisir une quantité et une catégorie pour chaque ingrédient"
  //         );
  //         console.log(
  //           "Saisir une quantité et une catégorie pour chaque ingrédient"
  //         );

  //         break; // arrête la boucle si un ingrédient n'a pas de quantité ou de catégorie
  //       } else {
  //         handleUpdate();
  //       }
  //     }
  //     //////////////////////
  //     ////////// SI QUANTITE RENSEIGNEE, CONTROLE DE INGREDIENT ET CATEGORIE /////////////////////
  //     if (editQuantities[i]) {
  //       if (!editIngredients[i] || !editCategories[i]) {
  //         setMessageEdit(
  //           "Saisir un ingrédient et une catégorie pour chaque quantité"
  //         );
  //         console.log(
  //           "Saisir un ingrédient et une catégorie pour chaque quantité"
  //         );
  //         break; // arrête la boucle si un ingrédient n'a pas de quantité ou de catégorie
  //       } else {
  //         handleUpdate();
  //       }
  //     }
  //     //////////////////////
  //     ////////// SI CATEGORIE RENSEIGNEE, CONTROLE DE INGREDIENT ET QUANTITE /////////////////////
  //     if (editCategories[i]) {
  //       if (!editIngredients[i] || !editQuantities[i]) {
  //         setMessageEdit(
  //           "Saisir un ingrédient et une quantité pour chaque catégorie"
  //         );
  //         console.log(
  //           "Saisir un ingrédient et une quantité pour chaque catégorie"
  //         );
  //         break; // arrête la boucle si un ingrédient n'a pas de quantité ou de catégorie
  //       } else {
  //         handleUpdate();
  //       }
  //     }
  //     //////////////////////
  //   }
  // };
  /////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////
  // --- Modification dans le store et la BDD ---
  /////////////////////////////////////////////////////////////////////////////////

  const handleUpdate = () => {
    console.log("handleUpdate");
    //---------------------------------------------
    // modification d'une recette dans le store
    //---------------------------------------------
    console.log("modification d'une recette dans le store");
    setMessageEdit("Effectuer les modifications et valider");

    const data = {
      title: editTitle,
      author: editAuthor,
      seasons: editSeasons,
      ingredients: editIngredients,
      quantities: editQuantities,
      categories: editCategories,
      steps: editSteps,
    };

    dispatch(editRecipe([data, checkedRecipe._id]));
    //--------------------------------------------------------
    //-------------------------------------------------------
    // mettre à jour la BDD MongoDB et récupérer l'ID généré
    //---------------------------------------------------------
    //----------------------------------------------------------
    console.log("affichage AVANT MODIF BDD :");
    console.log(data);
    //---------------------------------------------
    //Mise à jour d'une recette dans la BDD:
    //---------------------------------------------

    axios.put("http://localhost:5000/recipe/" + checkedRecipe._id, {
      title: editTitle,
      author: editAuthor,
      seasons: editSeasons,
      ingredients: editIngredients,
      quantities: editQuantities,
      categories: editCategories,
      steps: editSteps,
    });

    setMessageEdit("Modification effectuée");
  };

  /////////////////////////////////////////////////////////////////////////////////
  // --- Gestion du Submit pour la modification dans le store et la BDD ---
  /////////////////////////////////////////////////////////////////////////////////
  const handleSubmitEdit = (e) => {
    //--------------------------------------
    e.preventDefault();
    console.log("début SUBMIT EDIT");
    console.log("Title" + editTitle);
    console.log("Saisons :");
    console.log(editSeasons);
    console.log("new Ing / Qtt / Cat / Stp");
    console.log(editIngredients);
    console.log(editQuantities);
    console.log(editCategories);
    console.log(editSteps);

    //---------------------------------------------------------------------------------------------------------------------
    // Contrôle des inputs obligatoires : lorsqu'un ingrédient est renseigné, la quantité et la catégorie sont obligatoires
    // Si OK modification Store et BDD
    //---------------------------------------------------------------------------------------------------------------------
    // handleTrio();
    handleUpdate();
  };

  /////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      {displayEdit && (
        <div className="recipe-edit">
          <form
            onSubmit={handleSubmitEdit}
            className="edit-form"
            id="edit-form"
          >
            <div className="edit-input">
              {/* <label htmlFor="newTitle">Titre de la Recette</label> */}
              <h4>Titre de la Recette</h4>
              <input
                name="editTitle"
                type="text"
                className="edit"
                id="editTitle"
                autoComplete="off"
                defaultValue={editTitle}
                onChange={(e) => handleTitle(e.target.value)}
                // onChange={(e) => setEditTitle(e.target.value)}
              />
            </div>
            <h4>Saisons</h4>
            <div className="seasons-edit-container">
              <div className="edit-input">
                <label htmlFor="printemps">Printemps </label>
                <input
                  name="printemps"
                  className="season"
                  type="checkbox"
                  id="printemps"
                  defaultChecked={
                    checkedRecipe.seasons.includes("printemps") ? "checked" : ""
                  }
                  onChange={(e) => {
                    handleSeasons(e.target.name);
                  }}
                />
              </div>

              <div className="edit-input">
                <label htmlFor="été">Eté </label>
                <input
                  name="été"
                  className="season"
                  type="checkbox"
                  id="été"
                  defaultChecked={
                    checkedRecipe.seasons.includes("été") ? "checked" : ""
                  }
                  onChange={(e) => {
                    handleSeasons(e.target.name);
                  }}
                />
              </div>
              <div className="edit-input">
                <label htmlFor="automne">Automne </label>
                <input
                  name="automne"
                  className="season"
                  type="checkbox"
                  id="automne"
                  defaultChecked={
                    checkedRecipe.seasons.includes("automne") ? "checked" : ""
                  }
                  onChange={(e) => {
                    handleSeasons(e.target.name);
                  }}
                />
              </div>
              <div className="edit-input">
                <label htmlFor="hiver">Hiver</label>
                <input
                  name="hiver"
                  className="season"
                  type="checkbox"
                  id="hiver"
                  defaultChecked={
                    checkedRecipe.seasons.includes("hiver") ? "checked" : ""
                  }
                  onChange={(e) => {
                    handleSeasons(e.target.name);
                  }}
                />
              </div>
            </div>
            <div className="edit-ingredients-label">
              <h4>Ingrédients</h4>
              <h4>Quantités</h4>
              <h4>Catégories</h4>
            </div>
            {/* /////////////////////////////////////////////////// */}
            <div className="edit-ingredients-container">
              {displayIngredients.map((index) => (
                <IngredientCardEdit
                  key={index}
                  index={index}
                  recipe={checkedRecipe}
                  handleIngredients={handleIngredients}
                  handleQuantities={handleQuantities}
                  handleCategories={handleCategories}
                />
              ))}
              {/* /////////////////////////////////////////////////// */}
            </div>
            {/* /////////////////////////////////////////////////// */}
            <h4>Etapes</h4>
            <div className="edit-steps-container">
              {displaySteps.map((indexStep) => (
                <div className="edit-input" key={indexStep}>
                  <input
                    name={"editStep" + indexStep}
                    type="text"
                    className="details"
                    id={"editStep" + indexStep}
                    autoComplete="off"
                    defaultValue={editSteps[indexStep]}
                    onChange={(e) => {
                      handleSteps(e.target.value, indexStep);
                    }}
                  />
                </div>
              ))}
            </div>
            <p className="espace-message">{messageEdit}</p>
            <div className="edit-button-container">
              <button id="form-validation">Valider</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default DétailsEdit;

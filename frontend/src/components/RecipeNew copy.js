import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createRecipe } from "../feature/recipe.slice";
import axios from "axios";

const RecipeNew = () => {
  const [displayNew, setDisplayNew] = useState(true);
  const [messageNew, setMessageNew] = useState("Saisir les informations");

  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("Melissande");
  const [newIngredients, setNewIngredients] = useState([]);
  const [newQuantities, setNewQuantities] = useState([]);
  const [newCategories, setNewCategories] = useState([]);
  const [newSteps, setNewSteps] = useState([]);
  const [newSeasons, setNewSeasons] = useState([]);
  let arrayNew = [];
  let arrayW = [];
  let arrayIngredients = [];

  const dispatch = useDispatch();

  //////////////////////////////////////////////////////////////////////////////////
  // Gestion des inputs
  /////////////////////////////////////////////////////////////////////////////////
  // Stockage des saisons
  ///////////////////////
  const handleSeasons = async (e) => {
    await arrayW.push(e.target.name);
    arrayNew = [...newSeasons, ...arrayW];
    setNewSeasons(arrayNew);
  };
  /////////////////////////////
  // Stockage des ingrédients
  /////////////////////////////
  const handleIngredients = (newVal, ingId) => {
    arrayIngredients[ingId] = newVal;
  };
  /////////////////////////////
  // Stockage des quantités
  /////////////////////////////
  const handleQuantities = async (e) => {
    console.log("fonction quantités");
    // await arrayW.push(e.target.value);
    // arrayNew = [...newQuantities, ...arrayW];
    // setNewQuantities(arrayNew);
  };
  /////////////////////////////
  // Stockage des catégories
  /////////////////////////////
  const handleCategories = async (e) => {
    console.log("fonction catégories");
    // await arrayW.push(e.target.value);
    // arrayNew = [...newCategories, ...arrayW];
    // setNewCategories(arrayNew);
  };
  /////////////////////////////
  // Stockage des étapes
  /////////////////////////////
  const handleSteps = async (e) => {
    await arrayW.push(e.target.value);
    arrayNew = [...newSteps, ...arrayW];
    setNewSteps(arrayNew);
  };
  ///////////////////////////
  // Reset du formulaire
  //////////////////////////
  const resetForm = () => {
    console.log("Réinit du formulaire");
    document.getElementById("new-form").reset();
  };
  /////////////////////////////////////////////////////////////////////////////////
  // --- Gestion du Submit pour la création dans le store et la BDD ---
  /////////////////////////////////////////////////////////////////////////////////
  const handleNew = (e) => {
    e.preventDefault();

    // Récupération des données stockées dans les tableaux intermédiaires
    setNewIngredients(...arrayIngredients);

    // Création d'une nouvelle recette dans le store
    console.log("Création d'une nouvelle recette dans le store");

    const data = {
      title: newTitle,
      author: newAuthor,
      seasons: newSeasons,
      ingredients: newIngredients,
      quantities: newQuantities,
      categories: newCategories,
      steps: newSteps,
      _id: Date.now(),
    };

    dispatch(createRecipe(data));

    // mettre à jour la BDD MongoDB et récupérer l'ID généré

    console.log("affichage AVANT BDD :");
    console.log(data);

    // Création d'une recette : titre et auteur

    axios.post("http://localhost:5000/recipe/", data);

    // Réinitialiser le State de newRecipe
    setNewTitle("");
    setNewAuthor("Melissande");
    setNewSeasons([]);
    setNewIngredients([]);
    setNewQuantities([]);
    setNewCategories([]);
    setNewSteps([]);
    setMessageNew(
      "Création effectuée, vous pouvez saisir une nouvelle recette"
    );
    resetForm();
  };
  /////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      {displayNew && (
        <div className="recipe-new">
          <form onSubmit={handleNew} className="new-form" id="new-form">
            <div className="new-input">
              <label htmlFor="newTitle">Titre de la Recette</label>
              <input
                name="newTitle"
                // required
                type="text"
                className="new"
                id="newTitle"
                value={newTitle}
                autoComplete="off"
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            <h4>Saisons</h4>
            <div className="seasons-container">
              <div className="new-input">
                <label htmlFor="printemps">Printemps </label>
                <input
                  name="printemps"
                  type="checkbox"
                  id="printemps"
                  onChange={handleSeasons}
                />
              </div>

              <div className="new-input">
                <label htmlFor="été">Eté </label>
                <input
                  name="été"
                  type="checkbox"
                  id="été"
                  onChange={handleSeasons}
                />
              </div>
              <div className="new-input">
                <label htmlFor="automne">Automne </label>
                <input
                  name="automne"
                  type="checkbox"
                  id="automne"
                  onChange={handleSeasons}
                />
              </div>
              <div className="new-input">
                <label htmlFor="hiver">Hiver</label>
                <input
                  name="hiver"
                  type="checkbox"
                  id="hiver"
                  onChange={handleSeasons}
                />
              </div>
            </div>
            <div className="ingredients-label">
              <h4>Ingrédients</h4>
              <h4>Quantités</h4>
              <h4>Catégories</h4>
            </div>
            {/* /////////////////////////////////////////////////// */}
            <div className="ingredients-container">
              {/* /////////////////////////////////////////////////// */}
              {/* 1er Groupe de 5 */}
              <div className="groupe-1">
                {/* Bloc1 */}
                <div className="ingredient-bloc">
                  <div className="new-input">
                    <input
                      name="newIngredient1"
                      type="text"
                      className="details"
                      id="newIngredient1"
                      autoComplete="off"
                      placeholder="Ingrédient 1"
                      onChange={(e) => {
                        handleIngredients(e.target.value, 0);
                      }}
                    />
                  </div>
                  <div className="new-input">
                    <input
                      name="newQuantity1"
                      type="text"
                      className="details"
                      id="newQuantity1"
                      autoComplete="off"
                      placeholder="Quantité 1"
                      onChange={handleQuantities}
                    />
                  </div>
                  <div className="select-category">
                    <select
                      name="category"
                      id="category1"
                      onChange={handleCategories}
                    >
                      <option value="">Catégorie</option>
                      <option value="frais">Frais</option>
                      <option value="épicerie">Epicerie</option>
                      <option value="fruitslégumes">Fruits/Légumes</option>
                    </select>
                  </div>
                </div>
                {/* Bloc2 */}
                <div className="ingredient-bloc">
                  <div className="new-input">
                    <input
                      name="newIngredient2"
                      type="text"
                      className="details"
                      id="newIngredient2"
                      autoComplete="off"
                      placeholder="Ingrédient 2"
                      onChange={(e) => {
                        handleIngredients(e.target.value, 1);
                      }}
                    />
                  </div>
                  <div className="new-input">
                    <input
                      name="newQuantity2"
                      type="text"
                      className="details"
                      id="newQuantity2"
                      autoComplete="off"
                      placeholder="Quantité 2"
                      onChange={handleQuantities}
                    />
                  </div>
                  <div className="select-category">
                    <select
                      name="category"
                      id="category2"
                      onChange={handleCategories}
                    >
                      <option value="">Catégorie</option>
                      <option value="frais">Frais</option>
                      <option value="épicerie">Epicerie</option>
                      <option value="fruitslégumes">Fruits/Légumes</option>
                    </select>
                  </div>
                </div>
                {/* Bloc3 */}
                <div className="ingredient-bloc">
                  <div className="new-input">
                    <input
                      name="newIngredient3"
                      type="text"
                      className="details"
                      id="newIngredient3"
                      autoComplete="off"
                      placeholder="Ingrédient 3"
                      onChange={(e) => {
                        handleIngredients(e.target.value, 2);
                      }}
                    />
                  </div>
                  <div className="new-input">
                    <input
                      name="newQuantity3"
                      type="text"
                      className="details"
                      id="newQuantity3"
                      autoComplete="off"
                      placeholder="Quantité 3"
                      onChange={handleQuantities}
                    />
                  </div>
                  <div className="select-category">
                    <select
                      name="category"
                      id="category3"
                      onChange={handleCategories}
                    >
                      <option value="">Catégorie</option>
                      <option value="frais">Frais</option>
                      <option value="épicerie">Epicerie</option>
                      <option value="fruitslégumes">Fruits/Légumes</option>
                    </select>
                  </div>
                </div>

                {/* Bloc4 */}
                <div className="ingredient-bloc">
                  <div className="new-input">
                    <input
                      name="newIngredient4"
                      type="text"
                      className="details"
                      id="newIngredient4"
                      autoComplete="off"
                      placeholder="Ingrédient 4"
                      onChange={(e) => {
                        handleIngredients(e.target.value, 3);
                      }}
                    />
                  </div>
                  <div className="new-input">
                    <input
                      name="newQuantity4"
                      type="text"
                      className="details"
                      id="newQuantity4"
                      autoComplete="off"
                      placeholder="Quantité 4"
                      onChange={handleQuantities}
                    />
                  </div>
                  <div className="select-category">
                    <select
                      name="category"
                      id="category4"
                      onChange={handleCategories}
                    >
                      <option value="">Catégorie</option>
                      <option value="frais">Frais</option>
                      <option value="épicerie">Epicerie</option>
                      <option value="fruitslégumes">Fruits/Légumes</option>
                    </select>
                  </div>
                </div>
                {/* Bloc5 */}
                <div className="ingredient-bloc">
                  <div className="new-input">
                    <input
                      name="newIngredient5"
                      type="text"
                      className="details"
                      id="newIngredient5"
                      autoComplete="off"
                      placeholder="Ingrédient 5"
                      onChange={(e) => {
                        handleIngredients(e.target.value, 4);
                      }}
                    />
                  </div>
                  <div className="new-input">
                    <input
                      name="newQuantity5"
                      type="text"
                      className="details"
                      id="newQuantity5"
                      autoComplete="off"
                      placeholder="Quantité 5"
                      onChange={handleQuantities}
                    />
                  </div>
                  <div className="select-category">
                    <select
                      name="category"
                      id="category5"
                      onChange={handleCategories}
                    >
                      <option value="">Catégorie</option>
                      <option value="frais">Frais</option>
                      <option value="épicerie">Epicerie</option>
                      <option value="fruitslégumes">Fruits/Légumes</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* /////////////////////////////////////////////////// */}

              {/* 2ème Groupe de 5 */}
              <div className="groupe-2">
                {/* Bloc1 */}
                <div className="ingredient-bloc">
                  <div className="new-input">
                    <input
                      name="newIngredient6"
                      type="text"
                      className="details"
                      id="newIngredient6"
                      autoComplete="off"
                      placeholder="Ingrédient 6"
                      onChange={(e) => {
                        handleIngredients(e.target.value, 5);
                      }}
                    />
                  </div>
                  <div className="new-input">
                    <input
                      name="newQuantity6"
                      type="text"
                      className="details"
                      id="newQuantity6"
                      autoComplete="off"
                      placeholder="Quantité 6"
                      onChange={handleQuantities}
                    />
                  </div>
                  <div className="select-category">
                    <select
                      name="category"
                      id="category6"
                      onChange={handleCategories}
                    >
                      <option value="">Catégorie</option>
                      <option value="frais">Frais</option>
                      <option value="épicerie">Epicerie</option>
                      <option value="fruitslégumes">Fruits/Légumes</option>
                    </select>
                  </div>
                </div>
                {/* Bloc2 */}
                <div className="ingredient-bloc">
                  <div className="new-input">
                    <input
                      name="newIngredient7"
                      type="text"
                      className="details"
                      id="newIngredient7"
                      autoComplete="off"
                      placeholder="Ingrédient 7"
                      onChange={(e) => {
                        handleIngredients(e.target.value, 6);
                      }}
                    />
                  </div>
                  <div className="new-input">
                    <input
                      name="newQuantity7"
                      type="text"
                      className="details"
                      id="newQuantity7"
                      autoComplete="off"
                      placeholder="Quantité 7"
                      onChange={handleQuantities}
                    />
                  </div>
                  <div className="select-category">
                    <select
                      name="category"
                      id="category7"
                      onChange={handleCategories}
                    >
                      <option value="">Catégorie</option>
                      <option value="frais">Frais</option>
                      <option value="épicerie">Epicerie</option>
                      <option value="fruitslégumes">Fruits/Légumes</option>
                    </select>
                  </div>
                </div>
                {/* Bloc3 */}
                <div className="ingredient-bloc">
                  <div className="new-input">
                    <input
                      name="newIngredient8"
                      type="text"
                      className="details"
                      id="newIngredient8"
                      autoComplete="off"
                      placeholder="Ingrédient 8"
                      onChange={(e) => {
                        handleIngredients(e.target.value, 7);
                      }}
                    />
                  </div>
                  <div className="new-input">
                    <input
                      name="newQuantity8"
                      type="text"
                      className="details"
                      id="newQuantity8"
                      autoComplete="off"
                      placeholder="Quantité 8"
                      onChange={handleQuantities}
                    />
                  </div>
                  <div className="select-category">
                    <select
                      name="category"
                      id="category8"
                      onChange={handleCategories}
                    >
                      <option value="">Catégorie</option>
                      <option value="frais">Frais</option>
                      <option value="épicerie">Epicerie</option>
                      <option value="fruitslégumes">Fruits/Légumes</option>
                    </select>
                  </div>
                </div>

                {/* Bloc4 */}
                <div className="ingredient-bloc">
                  <div className="new-input">
                    <input
                      name="newIngredient9"
                      type="text"
                      className="details"
                      id="newIngredient9"
                      autoComplete="off"
                      placeholder="Ingrédient 9"
                      onChange={(e) => {
                        handleIngredients(e.target.value, 8);
                      }}
                    />
                  </div>
                  <div className="new-input">
                    <input
                      name="newQuantity9"
                      type="text"
                      className="details"
                      id="newQuantity9"
                      autoComplete="off"
                      placeholder="Quantité 9"
                      onChange={handleQuantities}
                    />
                  </div>
                  <div className="select-category">
                    <select
                      name="category"
                      id="category9"
                      onChange={handleCategories}
                    >
                      <option value="">Catégorie</option>
                      <option value="frais">Frais</option>
                      <option value="épicerie">Epicerie</option>
                      <option value="fruitslégumes">Fruits/Légumes</option>
                    </select>
                  </div>
                </div>
                {/* Bloc5 */}
                <div className="ingredient-bloc">
                  <div className="new-input">
                    <input
                      name="newIngredient10"
                      type="text"
                      className="details"
                      id="newIngredient10"
                      autoComplete="off"
                      placeholder="Ingrédient 10"
                      onChange={(e) => {
                        handleIngredients(e.target.value, 9);
                      }}
                    />
                  </div>
                  <div className="new-input">
                    <input
                      name="newQuantity10"
                      type="text"
                      className="details"
                      id="newQuantity10"
                      autoComplete="off"
                      placeholder="Quantité 10"
                      onChange={handleQuantities}
                    />
                  </div>
                  <div className="select-category">
                    <select
                      name="category"
                      id="category10"
                      onChange={handleCategories}
                    >
                      <option value="">Catégorie</option>
                      <option value="frais">Frais</option>
                      <option value="épicerie">Epicerie</option>
                      <option value="fruitslégumes">Fruits/Légumes</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* /////////////////////////////////////////////////// */}
            </div>
            {/* /////////////////////////////////////////////////// */}
            <h4>Etapes</h4>
            <div className="steps-container">
              <div className="new-input">
                <input
                  name="newStep1"
                  type="text"
                  className="details"
                  id="newStep1"
                  autoComplete="off"
                  placeholder="Etape 1"
                  onChange={handleSteps}
                />
              </div>
              <div className="new-input">
                {/* <label htmlFor="newStep2">Step2</label> */}
                <input
                  name="newStep2"
                  type="text"
                  className="details"
                  id="newStep2"
                  autoComplete="off"
                  placeholder="Etape 2"
                  onChange={handleSteps}
                />
              </div>
            </div>
            <p className="espace-message">{messageNew}</p>
            <button>Submit</button>
          </form>
        </div>
      )}
    </>
  );
};

export default RecipeNew;

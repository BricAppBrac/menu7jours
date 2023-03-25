import React from "react";

const IngredientCard = (props) => {
  return (
    <div>
      <div className="ingredient-bloc">
        <div className="new-input">
          <input
            name={"newIngrédient" + props.index}
            type="text"
            className="details"
            id={"newIngrédient" + props.index}
            autoComplete="off"
            placeholder={"Ingrédient " + (props.index + 1)}
            onChange={(e) => {
              props.handleIngredients(e.target.value, props.index);
            }}
          />
        </div>
        <div className="new-input">
          <input
            name={"newQuantity" + props.index}
            type="text"
            className="details"
            id={"newQuantity" + props.index}
            autoComplete="off"
            placeholder={"Quantité " + (props.index + 1)}
            onChange={(e) => {
              props.handleQuantities(e.target.value, props.index);
            }}
          />
        </div>
        <div className="select-category">
          <select
            name={"category" + props.index}
            id={"category" + props.index}
            onChange={(e) => {
              props.handleCategories(e.target.value, props.index);
            }}
          >
            <option value="">Catégorie</option>
            <option value="Frais">Frais</option>
            <option value="Epicerie">Epicerie</option>
            <option value="Fruits/Légumes">Fruits/Légumes</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default IngredientCard;

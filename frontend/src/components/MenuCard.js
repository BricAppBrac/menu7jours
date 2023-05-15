import React from "react";

const MenuCard = (props) => {
  return (
    <div className="compo-card">
      <div className="compo-card-content">
        <h3>Repas du {props.compo[2]}</h3>

        <p>{props.compo[4] ? "meal1 et meal2" : "meal1"}</p>
      </div>
    </div>
  );
};

export default MenuCard;

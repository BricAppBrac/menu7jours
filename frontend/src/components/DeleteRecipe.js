import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteRecipe } from "../feature/liste.slice";

const DeleteRecipe = (props) => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const [origin, setOrigin] = useState(props.delOrigin);

  const handleConfirm = async () => {
    console.log("delOrigin : " + props.delOrigin);
    console.log("recipeId : " + props.recipeId);
    console.log("origin : " + origin);

    const handleDelete = () => {
      axios.delete("http://localhost:5000/recipe/" + props.recipeId);
      dispatch(deleteRecipe(props.recipeId));
    };

    if (origin == "liste-0") {
      setMessage("Confirmer la suppression");
      setOrigin("liste-1");
    }
    if (origin == "liste-1") {
      setMessage("Suppression effectuée");
      setOrigin("liste-2");
      handleDelete();
    }
    if (origin == "détails-0") {
      setMessage("Confirmer la suppression");
      setOrigin("détails-1");
    }
    if (origin == "détails-1") {
      setMessage("Suppression effectuée");
      setOrigin("détails-2");
      handleDelete();
    }
  };

  return (
    <div className="delete-container">
      <div className="box-delete" onClick={handleConfirm}>
        {origin == "détails-1" ? (
          <button>
            <NavLink to="/PrivateRoute/HomeListeRecettesProtect">
              <i className="fa-solid fa-trash"></i>
            </NavLink>
          </button>
        ) : (
          <button>
            <i className="fa-solid fa-trash"></i>
          </button>
        )}
      </div>
      <div className="box-message">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default DeleteRecipe;

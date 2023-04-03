import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setConfirmDelete } from "../feature/indic.slice";
import { deleteRecipe } from "../feature/liste.slice";

const DetailsDeleteRecipe = (props) => {
  const dispatch = useDispatch();
  const checkedRecipe = useSelector((state) => state.checkedRec.checkedRecipe);
  const [message, setMessage] = useState("");
  const [origin, setOrigin] = useState(props.delOrigin);
  // const [isEdit, setIsEdit] = useState(false);

  const confirmDelete = useSelector((state) => state.confDelete.confDelete);

  //////////////////////////////////////////

  const handleEdit = () => {
    //-----------------------------
    console.log("handleEdit");
    console.log(checkedRecipe.title);
    // setIsEdit(true);
    // setIsValidate(false);
  };

  const handleValidate = () => {
    //---------------------------------
    console.log("handleValidate");
    // console.log(checkedRecipe.title);
    // setIsValidate(true);
    // setIsEdit(true);
  };

  const handleBack = () => {
    //---------------------------------
    console.log("handleBack");
    // console.log(checkedRecipe.title);
    // setIsValidate(true);
    // setIsEdit(true);
  };

  const handleConfirm = async () => {
    //------------------------------------
    console.log("delOrigin : " + props.delOrigin);
    console.log("recipeId : " + props.recipeId);
    console.log("origin : " + origin);

    const handleDelete = () => {
      //--------------------------------
      axios.delete("http://localhost:5000/recipe/" + props.recipeId);
      dispatch(deleteRecipe(props.recipeId));
    };

    if (origin == "liste-0") {
      setMessage("Confirmer la suppression");
      setOrigin("liste-1");
      dispatch(setConfirmDelete("liste-1"));
    }
    if (origin == "liste-1") {
      setMessage("Suppression effectuée");
      setOrigin("liste-2");
      dispatch(setConfirmDelete("liste-2"));
      handleDelete();
    }
    if (origin == "détails-0") {
      setMessage("Confirmer la suppression");
      dispatch(setConfirmDelete("détails-1"));
      setOrigin("détails-1");
    }
    if (origin == "détails-1") {
      setMessage("Suppression effectuée");

      setOrigin("détails-2");
      dispatch(setConfirmDelete("détails-2"));
      handleDelete();
    }
  };

  return (
    <div className="delete-container">
      <div className="box-message">
        <p>{message}</p>
      </div>
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
      <div className="box-modif-back">
        {origin === "détails-1" ? (
          <button onClick={handleBack}>
            <NavLink to="/PrivateRoute/pagedetailsrecipe">
              <i className="fa-solid fa-rotate-left"></i>
            </NavLink>
          </button>
        ) : (
          <button onClick={handleEdit}>
            <NavLink to="/PrivateRoute/pagedetailsedit">Modifier</NavLink>
          </button>
        )}
      </div>
    </div>
  );
};

export default DetailsDeleteRecipe;

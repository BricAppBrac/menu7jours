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

  //////////////////////////////////////////

  const handleEdit = () => {
    //-----------------------------
    console.log("handleEdit");
    console.log(checkedRecipe.title);
  };

  //////////////////////////////////////////
  const handleCancel = () => {
    console.log("handleCancel");
    if (origin === "détails-1") {
      setMessage("");
      setOrigin("détails-0");
    }
  };

  //////////////////////////////////////////
  const handleConfirm = async () => {
    //------------------------------------
    console.log("delOrigin : " + props.delOrigin);
    console.log("recipeId : " + props.recipeId);
    console.log("origin : " + origin);

    const handleDelete = () => {
      axios.delete("http://localhost:5000/recipe/" + props.recipeId);
      dispatch(deleteRecipe(props.recipeId));
      console.log("après dispatch deleteRecipe");
    };

    if (origin === "détails-0") {
      setMessage("Confirmer la suppression");
      dispatch(setConfirmDelete("détails-1"));
      console.log("après dispatch setConfirmDelete");
      setOrigin("détails-1");
    }
    if (origin === "détails-1") {
      setMessage("Suppression effectuée");

      setOrigin("détails-2");
      dispatch(setConfirmDelete("détails-2"));
      console.log("après dispatch setConfirmDelete");
      handleDelete();
    }
  };

  return (
    <div className="delete-container">
      {/* //////////////////////////////////////*/}
      <div className="box-modif-back">
        <button>
          <NavLink to="/PrivateRoute/HomeListeRecettesProtect">
            <i className="fa-solid fa-rotate-left"></i>
          </NavLink>
        </button>
      </div>
      <div className="box-modif-back">
        {origin === "détails-1" ? (
          ""
        ) : (
          // <button onClick={() => handleBack()}>
          //   <NavLink to="/PrivateRoute/pagedetailsrecipeprotect">
          //     <i className="fa-solid fa-rotate-left"></i>
          //   </NavLink>
          // </button>
          <button onClick={() => handleEdit()}>
            <NavLink to="/PrivateRoute/pagedetailsedit">
              <i className="fa-solid fa-file-pen"></i>
            </NavLink>
          </button>
        )}
      </div>
      <div className="box-delete">
        {origin === "détails-1" ? (
          <div className="box-message-conf">
            <div className="box-message">
              <p>{message}</p>
            </div>
            <div className="conf-suppr">
              <button onClick={() => handleConfirm()}>
                <NavLink to="/PrivateRoute/HomeListeRecettesProtect">
                  <i className="fa-solid fa-thumbs-up"></i>
                </NavLink>
              </button>
              <button onClick={() => handleCancel()}>
                <NavLink to="/PrivateRoute/HomeListeRecettesProtect">
                  <i className="fa-solid fa-thumbs-down"></i>
                </NavLink>
              </button>
            </div>
          </div>
        ) : (
          <button onClick={() => handleConfirm()}>
            <i className="fa-solid fa-trash"></i>
          </button>
        )}
      </div>

      {/* //////////////////////////////////////*/}
      {/* <div className="box-delete" onClick={() => handleConfirm()}>


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
          <button onClick={() => handleBack()}>
            <NavLink to="/PrivateRoute/pagedetailsrecipeprotect">
              <i className="fa-solid fa-rotate-left"></i>
            </NavLink>
          </button>
        ) : (
          <button onClick={() => handleEdit()}>
            <NavLink to="/PrivateRoute/pagedetailsedit">
              <i className="fa-solid fa-file-pen"></i>
            </NavLink>
          </button>
        )}
      </div> */}
    </div>
  );
};

export default DetailsDeleteRecipe;

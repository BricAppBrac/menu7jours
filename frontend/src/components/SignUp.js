import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSignUp, setCloseUp } from "../feature/signUp.slice";

const SignUp = () => {
  const dispatch = useDispatch();

  // Récupération de la demande d'ouverture du formulaire
  const displaySignUp = useSelector(
    (state) => state.displaySignUp.displaySignUp
  );

  // State de l'email
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRepeatPassword, setUserRepeatPassword] = useState("");

  const [message, setMessage] = useState(
    "-- Inscrivez-vous pour plus de fonctionnalités --"
  );

  const handleForm = async (e) => {
    e.preventDefault();

    // ---- Validation côté Front  -----

    // Contrôle de la structure de l'email
    // A FAIRE
    // if (userEmail) {
    //   setMessage(`L'adresse email doit contenir "@" et "."`);
    //   console.log(`L'adresse email doit contenir "@" et "."`);
    //   console.log(userPassword);
    //   console.log(userRepeatPassword);
    //   return;
    // } ;

    // Longueur mot de passe A COMPLEXIFIER AVEC REGEX
    if ((userPassword.length || userRepeatPassword.length) < 6) {
      setMessage("6 caractères min");
      console.log("Err 6 caractères min : ");
      console.log(userPassword);
      console.log(userRepeatPassword);
      return;
    }
    // Comparaison des mots de passe saisis
    else if (userPassword !== userRepeatPassword) {
      setMessage("les mots de passe ne sont pas égaux");
      console.log("Err mots de passe non égaux : ");
      console.log(userPassword);
      console.log(userRepeatPassword);
      return;
    } else {
      // Création d'un compte utilisateur dans la BDD

      // Remise à zéro des inputs
      setUserEmail("");
      setUserPassword("");
      setUserRepeatPassword("");
      setMessage("Utilisateur Validé");
      return;
    }
  };

  const closeModal = async () => {
    await dispatch(setCloseUp(true));
    dispatch(setSignUp(false));
    setMessage("-- Inscrivez-vous pour plus de fonctionnalités --");
  };

  return (
    <>
      {displaySignUp && (
        <div className="signin-and-up">
          <div className="sign-overlay">
            <div className="sign-absolute">
              <div className="sign-title">
                <h4>Sign Up</h4>
                <button onClick={() => closeModal()}>x</button>
              </div>

              <form onSubmit={handleForm} className="signup-form">
                <div className="signup-input">
                  <label htmlFor="signupEmail">Email address</label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="form-control"
                    id="signupEmail"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </div>
                <div className="signup-input">
                  <label htmlFor="signupPassword">Password</label>
                  <input
                    name="password"
                    required
                    type="password"
                    className="form-control"
                    id="signupPassword"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </div>
                <div className="signup-input">
                  <label htmlFor="signupPassword">Repeat Password</label>
                  <input
                    name="password"
                    required
                    type="password"
                    className="form-control"
                    id="repeatPassword"
                    value={userRepeatPassword}
                    onChange={(e) => setUserRepeatPassword(e.target.value)}
                  />
                  <p className="espace-message">{message}</p>
                </div>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;

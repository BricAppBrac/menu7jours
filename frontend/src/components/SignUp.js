import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setCloseUp } from "../feature/closeUp.slice";
import { setSignUp, setCloseUp } from "../feature/signUp.slice";

// const [validation, setValidation] = useState("");

const handleForm = async (e) => {
  e.preventDefault();
  // setValidation("Submit");
};

const SignUp = () => {
  const dispatch = useDispatch();

  // Récupération de la demande d'ouverture du formulaire
  const displaySignUp = useSelector(
    (state) => state.displaySignUp.displaySignUp
  );

  const closeModal = async () => {
    await dispatch(setCloseUp(true));
    dispatch(setSignUp(false));
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
                    // ref={addInputs}
                    name="email"
                    required
                    type="email"
                    className="form-control"
                    id="signupEmail"
                  />
                </div>
                <div className="signup-input">
                  <label htmlFor="signupPassword">Password</label>
                  <input
                    // ref={addInputs}
                    name="password"
                    required
                    type="password"
                    className="form-control"
                    id="signupPassword"
                  />
                </div>
                <div className="signup-input">
                  <label htmlFor="signupPassword">Repeat Password</label>
                  <input
                    // ref={addInputs}
                    name="password"
                    required
                    type="password"
                    className="form-control"
                    id="repeatPassword"
                  />
                  {/* <p className="espace-message">{validation}</p> */}
                  <p className="espace-message">"Espace Message"</p>
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

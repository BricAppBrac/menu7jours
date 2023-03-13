import { configureStore } from "@reduxjs/toolkit";
import displaySignUpReducer from "../feature/signUp.slice";

export default configureStore({
  reducer: {
    displaySignUp: displaySignUpReducer,
  },
});

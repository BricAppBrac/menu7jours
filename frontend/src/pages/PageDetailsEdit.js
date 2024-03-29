import React from "react";
import Footer from "../components/Footer";
import NavbarProtect from "../components/NavbarProtect";
import DetailsEdit from "../components/DétailsEdit";
import SignUp from "../components/SignUp";

const PageDetailsEdit = () => {
  return (
    <div className="pagenewrecipe">
      <div className="new-navbar">
        <NavbarProtect />
        <SignUp />
      </div>
      <div className="new-content">
        <div className="new-text">
          <h1>Modification de la Recette</h1>
          <DetailsEdit />
        </div>
      </div>
      <div className="new-footer">
        <Footer />
      </div>
    </div>
  );
};

export default PageDetailsEdit;

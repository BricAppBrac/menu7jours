import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <div className="contact-footer">
        <button>Inscription gratuite: mail à bricappbrac@gmail.com</button>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

import React from "react";
import "./styles/Footer.css";
import Redes from "./components/Redes";
import Contact from "./components/Contact";
import Form from "./components/Form";

const Footer = () => {
  return (
    <footer className="container_footer">
      <div>
        <Redes/>
        <Contact/>
      </div>
      <Form/>
    </footer>
  );
};

export default Footer;

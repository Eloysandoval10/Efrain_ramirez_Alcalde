import React from "react";
import "../styles/Redes.css";

const Redes = () => {
  return (
    <section className="container_redes">
      <div className="container_redes_div">
        <p>SIGUEME EN  </p>
        <p>MIS REDES SOCIALES</p>
      </div>
      <a
      className="facebook"
        href="https://www.facebook.com/andresfdez27"
        target="_blank"
      >
        <i className="bx bxl-facebook-square"></i>
      </a>
      <a
      className="instagram"
        href="https://www.instagram.com/andresfernandezbecerril/"
        target="_blank"
      >
        <i className="bx bxl-instagram-alt"></i>
      </a>
    </section>
  );
};

export default Redes;

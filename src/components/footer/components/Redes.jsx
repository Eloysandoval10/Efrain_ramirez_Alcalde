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
        href="https://www.facebook.com/Somosgarantia?mibextid=LQQJ4d"
        target="_blank"
      >
        <i className="bx bxl-facebook-square"></i>
      </a>
      <a
        href="https://instagram.com/somosgarantia?igshid=ZWQyN2ExYTkwZQ=="
        target="_blank"
      >
        <i className="bx bxl-instagram-alt"></i>
      </a>
    </section>
  );
};

export default Redes;

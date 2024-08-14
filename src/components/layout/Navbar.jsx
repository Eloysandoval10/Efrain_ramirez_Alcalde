import React, { useState } from "react";
import "./styles/Navbar.css";
import myImgNavbar from "../../../image/becerril.jpg";

const Navbar = () => {
  const [btnMenu, setBtnMenu] = useState(false);

  const toggleMenu = () => {
    setBtnMenu(!btnMenu);
  };

  // const close = () => {
  //   setBtnMenu(!btnMenu);
  // };

  const [menuActivo, setMenuActivo] = useState(false);

  // Función que cambia el estado al hacer clic en el botón del menú
  const toggleMenu2 = () => {
    setBtnMenu(!btnMenu);
  };

  return (
    <nav>
      <div className="container_navbar">
        <div className={`menu ${btnMenu ? "activo" : ""}`} onClick={toggleMenu}>
          <div className="barra"></div>
          <div className="barra"></div>
          <div className="barra"></div>
        </div>
        {/* <div onClick={toggleMenu} className="">
          {btnMenu ? (
            <i className="menu bx bx-menu"></i>
          ) : (
            <i className="menu bx bx-menu-alt-right"></i>
          )}
        </div> */}
        <div className={`navbar_link ${btnMenu ? "active" : ""}`}>
          {/* <a onClick={close} href="#AboutMe" className="link_a">
            Sobre Mi
          </a>
          <a onClick={close} href="#main" className="link_a">
            Campaña
          </a>
          <a onClick={close} href="#redes" className="link_a">
            Contacto
          </a> */}
        </div>
      </div>

      <div className="nabvar_redes-container">
        <h5 className="navbar_redes-h5">siguenos:</h5>
        <div className="navbar_redes">
          <i className="bx bxl-facebook"></i>
          <i className="bx bxl-instagram"></i>
          <i className="bx bxl-twitter"></i>
          <i className="bx bxl-youtube"></i>
        </div>
      </div>

      <h2 className="title_app">
        <spam className="thin">guia geoturistica y </spam>{" "}
        <spam className="thicker"> cultural de becerril</spam>
      </h2>

      <div className="image_logo">
        <img src={myImgNavbar} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;

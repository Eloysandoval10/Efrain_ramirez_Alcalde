import React, { useState } from "react";
import "./styles/Navbar.css";
import myImgNavbar from "../../../image/becerril.jpg";
import { Link, useLocation } from "react-router-dom";

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

  const location = useLocation();

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
        <ul className={`navbar_link ${btnMenu ? "active" : ""}`}>
          {/* El botón "Inicio" siempre está visible */}
          <Link className="li_1" onClick={toggleMenu} to="/">
            <h3 className="link_a">Inicio</h3>
          </Link>
          {/* Solo muestra los enlaces internos si estás en la ruta "/" */}
          {location.pathname === "/" && (
            <>
              <li className="li_2">
                <a
                  onClick={toggleMenu}
                  href="#TurismoSections"
                  className="link_a"
                >
                  Busca
                </a>
              </li>
              <li className="li_3">
                <a
                  onClick={toggleMenu}
                  href="#Turismo2Section"
                  className="link_a"
                >
                  Destinos
                </a>
              </li>
              <li className="li_4">
                <a onClick={toggleMenu} href="#SectionMaps" className="link_a">
                  Mapa
                </a>
              </li>
              <li className="li_5">
                <a onClick={toggleMenu} href="#Footer" className="link_a">
                  Información
                </a>
              </li>
            </>
          )}
        </ul>
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
        <span className="thin">guia geoturistica y </span>{" "}
        <span className="thicker"> cultural de becerril</span>
      </h2>

      <div className="image_logo">
        <img src={myImgNavbar} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  const [btnMenu, setBtnMenu] = useState(false);

  const toggleMenu = () => {
    setBtnMenu(!btnMenu);
  };

  return (
    <nav className="container_navbar">
      <h2 className="title_app">EFRAIN RAMIREZ ALCALDE</h2>
      <div onClick={toggleMenu} className="">
        <i className="menu bx bx-menu-alt-right"></i>
      </div>
      <div className={`navbar_link ${btnMenu ? "active" : ""}`}>
        {/* <a href="#navbar">inicio</a> */}
        <a href="#main" className="link_a">
          campaña
        </a>
        <a href="#redes" className="link_a">
          contacto
        </a>
        {/* <h5>cualquier cosa</h5> */}
      </div>
      <div className="image_logo">
        <div className="div_image">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOa1B8AC1kXUzVz-9n0jgCwQzAjISkcPo7nyQL5EfSDjmE4odeJqfYllnGfwncvN-SfLmyyl1TYGp2Qgv6xYWDQsMea3Dm5BINrxOnImB_kvC9ioTCErxbPwtiaoiY_KB2HNSt6Ttwqlxr956o_9_6vWk4xMJK0m6gdTCHp_XYEPgrwhWnjpFZAlLcUg/s1024/WhatsApp%20Image%202023-06-08%20at%206.35.26%20PM%20(1).jpeg"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

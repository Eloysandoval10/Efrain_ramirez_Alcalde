import React from "react";
import "./style/Turismo2Section.css";
import section2foto1 from "../../../image/sectin2/foto1de2.jpg";
import section2foto2 from "../../../image/sectin2/foto2de2.jpg";
import section2foto3 from "../../../image/sectin2/foto3de2.jpg";
import section2foto4 from "../../../image/sectin2/foto4de2.jpg";
import section2foto5 from "../../../image/sectin2/foto5de2.jpg";

const Turismo2Section = () => {
  return (
    <div className="turismo-section">
      <div className="content">
        <div className="text">
          <h2>Destinos de Colombia</h2>
          <p>
            En Colombia llevamos el ritmo en la sangre. Es un país que te hace
            vibrar con sus emociones, donde podrás elegir el destino de tu
            preferencia.
          </p>
        </div>
        <div className="images">
          <div className="image-container">
            <a href="#">
              <img src={section2foto1} alt="Destino 1" />
              <h3>casa antigua</h3>
            </a>
          </div>
          <div className="image-container">
            <a href="#">
              <img src={section2foto2} alt="Destino 2" />
              <h3>plaza rozo machado</h3>
            </a>
          </div>
          <div className="image-container">
            <a href="#">
              <img src={section2foto3} alt="Destino 3" />
              <h3>parque iglesia catolica</h3>
            </a>
          </div>
          <div className="image-container">
            <a href="#">
              <img src={section2foto4} alt="Destino 4" />
              <h3>rio maracas</h3>
            </a>
          </div>
          <div className="image-container">
            <a href="#">
              <img src={section2foto5} alt="Destino 5" />
              <h3>mudanza folclorica</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Turismo2Section;

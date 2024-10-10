import React from "react";
import "../desTarjeta1/style/desTarjeta.css";

const Tarjeta = ({ nombre, descripcion, imagenes }) => {
  return (
    <div className="tarjeta">
      <div className="tarjeta">
        <div className="tarjeta-imagenes">
          {imagenes.map((imagen, index) => (
            <img
              key={index}
              src={imagen}
              alt={`imagen ${index + 1} de ${nombre}`}
              className="tarjeta-imagen"
            />
          ))}
        </div>
        <div className="tarjeta-contenido">
          <h2>{nombre}</h2>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;

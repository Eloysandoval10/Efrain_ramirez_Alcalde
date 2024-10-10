import React from "react";
import destino1 from "../data/datos"; // Asegúrate de que la ruta sea correcta
import "./style/destinos.css";

const Destinos2 = () => {
  // Accedemos al último destino
  const ultimoDestino = destino1[destino1.length - 1];

  return (
    <div className="containerSectionTurismo_divImg-tar">
      <h2>{ultimoDestino.nombre}</h2>
      <p>{ultimoDestino.descripcion}</p>
      <div className="imagenes-seccion">
        {ultimoDestino.imagenes.map((imagen, index) => (
          <img
            key={index}
            src={imagen}
            alt={`Imagen ${index + 1} de ${ultimoDestino.nombre}`}
            className="imgTurismo1"
          />
        ))}
      </div>
      <div style={{ width: "100%", height: "500px" }}>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1vFcx250URuZfpRgLkf0hA8aJ-tRrqCg"
          width="80%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Destinos2;

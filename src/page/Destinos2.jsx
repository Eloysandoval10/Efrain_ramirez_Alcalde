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
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26259.537474401666!2d-73.2823552!3d9.699328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sco!4v1728655307120!5m2!1ses!2sco"
          width="80%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Destinos2;

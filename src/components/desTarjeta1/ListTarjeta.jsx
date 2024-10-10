import React from "react";
import destino1 from "../../data/datos";
import Tarjeta from "./Tarjeta";

const ListTarjeta = () => {
  return (
    <div>
      {destino1.map((destino) => (
        <Tarjeta
          key={destino.id}
          nombre={destino.nombre}
          descripcion={destino.descripcion}
          imagenes={destino.imagenes}
        />
      ))}
    </div>
  );
};

export default ListTarjeta;

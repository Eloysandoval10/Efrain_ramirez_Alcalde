// src/pages/SiteDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import MapComponent from "../components/gogleMaps/MapComponent";

const sites = [
  {
    id: 1,
    title: "Sitio Turístico 1",
    description: "Descripción del sitio 1",
    position: { lat: -34.397, lng: 150.644 },
  },
  {
    id: 2,
    title: "Sitio Turístico 2",
    description: "Descripción del sitio 2",
    position: { lat: -35.307, lng: 149.124 },
  },
  // Añade más sitios según sea necesario
];

const SiteDetail = () => {
  const { id } = useParams();
  const site = sites.find((s) => s.id === parseInt(id));

  if (!site) {
    return <h2>Sitio no encontrado</h2>;
  }

  return (
    <div>
      <h1>{site.title}</h1>
      <p>{site.description}</p>
      <MapComponent center={site.position} markers={[site]} />
      {/* Añade más detalles del sitio */}
    </div>
  );
};

export default SiteDetail;

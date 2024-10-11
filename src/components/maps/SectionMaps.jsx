import React from "react";
import "./style/SectionMaps.css";
import MapComponent from "../gogleMaps/MapComponent";

const sites = [
  {
    id: 1,
    title: "Sitio Turístico 1",
    description: "Descripción del sitio 1",
    position: { lat: 9.7031, lng: -73.2775 },
  },
  {
    id: 2,
    title: "Sitio Turístico 2",
    description: "Descripción del sitio 2",
    position: { lat: -35.307, lng: 149.124 },
  },
  // Añade más sitios según sea necesario
];

const SectionMaps = () => {
  // const center = { lat: 40.635, lng: -4.0535 };
  const center = { lat: 9.7031, lng: -73.2775 };

  // 9°42′11″N 73°16′39″O﻿ / ﻿9.7030555555556, -73.2775
  return (
    <div /*style={{ width: "100%", height: "500px" }}*/>
      {/* <iframe
        src="https://www.google.com/maps/d/embed?mid=1vFcx250URuZfpRgLkf0hA8aJ-tRrqCg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}

      <MapComponent center={center} markers={sites} />
    </div>
  );
};

export default SectionMaps;

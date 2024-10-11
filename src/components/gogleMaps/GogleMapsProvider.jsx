// src/components/googleMaps/GoogleMapsProvider.jsx
import React from "react";
import { LoadScript } from "@react-google-maps/api";

const libraries = ["places"]; // Añade las librerías que necesites

const GoogleMapsProvider = ({ children }) => {
  console.log("Google Maps API Key:", import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      {children}
    </LoadScript>
  );
};

export default GoogleMapsProvider;

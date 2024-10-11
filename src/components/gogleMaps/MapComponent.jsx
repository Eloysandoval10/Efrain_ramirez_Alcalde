// src/components/GoogleMaps/MapComponent.jsx
import React from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const MapComponent = ({ center, markers }) => {
  const [selectedMarker, setSelectedMarker] = React.useState(null);

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.position}
          onClick={() => setSelectedMarker(marker)}
        />
      ))}

      {selectedMarker && (
        <InfoWindow
          position={selectedMarker.position}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <div>
            <h2>{selectedMarker.title}</h2>
            <p>{selectedMarker.description}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default React.memo(MapComponent);

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "../styles/Map.scss";

const Map = () => {
  return (
    <div id="map">
          <MapContainer
        center={[37.35660035808131, -5.981777913238261]}
        zoom={17}
        scrollWheelZoom={true}
      >
        <TileLayer
        noWrap={true}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[37.35660035808131, -5.981777913238261]}>
          <Popup>
            Clinica Apolo
          </Popup>
        </Marker>
        <Marker position={[37.384120540612344, -5.970677743277695]}>
          <Popup>
            Clinica Apolo
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

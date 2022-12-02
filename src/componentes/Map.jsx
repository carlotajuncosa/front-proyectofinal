import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "../styles/Map.scss";

const Map = () => {
  return (
    <div id="map">
          <MapContainer
        center={[40.183055885239856, -3.6883233692751243]}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
        noWrap={true}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[37.35656220673878, -5.98175395610718]}>
          <Popup>
          Clínica HEALTH ALGORITHM Sevilla
          </Popup>
        </Marker>
        <Marker position={[40.453055885239856, -3.6883233692751243]}>
          <Popup>
            Clínica HEALTH ALGORITHM Madrid
          </Popup>
        </Marker>
        <Marker position={[41.38097975865358, 2.12281604317208]}>
          <Popup>
          Clínica HEALTH ALGORITHM Barcelona
          </Popup>
        </Marker>
        <Marker position={[36.502626893949284, -6.272904771717729]}>
          <Popup>
          Clínica HEALTH ALGORITHM Cadiz
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

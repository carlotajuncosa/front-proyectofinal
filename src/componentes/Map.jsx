import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../styles/Map.scss";

const Map = () => {

  const leaflet = require('leaflet');

  const Icon = leaflet.icon({
    iconUrl: ("../../assets/marker/marker.png"),
    iconSize: [30,45],
    iconAnchor: [15,45],
});

  return (
    <>
      <div className="map">
        <h3>Nuestras Clínicas</h3>
        <MapContainer center={[40.183055885239856, -3.6883233692751243]} zoom={6} scrollWheelZoom={true}>
          <TileLayer
            noWrap={true}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={Icon} position={[37.35656220673878, -5.98175395610718]}>
            <Popup>Clínica HEALTH ALGORITHM Sevilla</Popup>
          </Marker>
          <Marker icon={Icon} position={[40.453055885239856, -3.6883233692751243]}>
            <Popup>Clínica HEALTH ALGORITHM Madrid</Popup>
          </Marker>
          <Marker icon={Icon} position={[41.38097975865358, 2.12281604317208]}>
            <Popup>Clínica HEALTH ALGORITHM Barcelona</Popup>
          </Marker>
          <Marker icon={Icon} position={[36.502626893949284, -6.272904771717729]}>
            <Popup>Clínica HEALTH ALGORITHM Cadiz</Popup>
          </Marker>
          <Marker icon={Icon} position={[43.009519587392404, -7.557221379411343]}>
            <Popup>Clínica HEALTH ALGORITHM Lugo</Popup>
          </Marker>
          <Marker icon={Icon} position={[25.6527143830878, 51.487856377369624]}>
            <Popup>Clínica HEALTH ALGORITHM Doha</Popup>
          </Marker>
          <Marker icon={Icon} position={[31.184425776437255, 121.49235751254024]}>
            <Popup>Clínica HEALTH ALGORITHM Shanghái</Popup>
          </Marker>
          <Marker icon={Icon} position={[-34.60974344235063, -58.402107670795026]}>
            <Popup>Clínica HEALTH ALGORITHM Buenos Aires</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default Map;

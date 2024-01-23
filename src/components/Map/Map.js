//React
import React from "react";

//React Leaflet
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";

/* perché ci sono dei problemi con il render automatico dell'icona predefinita */
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

//Style
import "leaflet/dist/leaflet.css";

/**
 * Map component that renders a Leaflet map with a tile layer, marker and popup.
 * The MapContainer sets the view with center coordinates, zoom level and scroll wheel zooming.
 * TileLayer loads map tiles from OpenStreetMap with attribution.
 * Marker adds a marker at specific coordinates.
 * Popup shows a popup message at the marker position.
 */
const Map = () => {
  /*//! È possibile modificare anche l'icona mostrata nel seguente modo 
  * è necessario => import L from "leaflet";
  const markerIcon = new L.icon({
    iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
    shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",

    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });
  */

  return (
    <div>
      <MapContainer
        center={[41.890281978444705, 12.492177238690653]}
        zoom={18}
        scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[41.890281978444705, 12.492177238690653]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

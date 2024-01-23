//React
import React, { useMemo, useState } from "react";

//React Leaflet
import {
  MapContainer,
  TileLayer,
  Popup,
  CircleMarker,
  Polyline,
  Rectangle,
  Tooltip,
} from "react-leaflet";

//Style
import "leaflet/dist/leaflet.css";

const VectorLayersMap = () => {
  const [isVisible, setIsVisible] = useState(false);

  const center = [41.5, 14];
  const rectangleValues = [
    [38.5, 8],
    [41.4, 10],
  ];

  const polyline = [
    [37.51197271259159, 15.087342191787926],
    [41.5, 14],
    [45.83267844558244, 8.800481141944358],
  ];

  const blueColorOption = {
    color: "blue",
    fill: "blue",
    weight: 2,
    fillOpacity: 0.2,
  };
  const greenColorOption = { color: "green", fill: "green", weight: 2 };
  const redColorOption = { color: "red", fill: "red", weight: 2 };
  const orangeColorOption = { color: "orange", fill: "orange", weight: 2 };
  const pathColorOption = { color: "black", weight: 3 };

  const TooltipCircle = () => {
    const [clickedCount, setClickedCount] = useState(0);

    const eventHandlers = useMemo(
      () => ({
        click() {
          setClickedCount((count) => count + 1);
        },
      }),
      []
    );

    const clickedText =
      clickedCount === 0
        ? "Clicca per cambiare testo"
        : `Continua a cliccare: ${clickedCount}`;

    return (
      <CircleMarker
        center={[41.5, 14]}
        eventHandlers={eventHandlers}
        pathOptions={orangeColorOption}
        radius={20}>
        <Tooltip>{clickedText}</Tooltip>
      </CircleMarker>
    );
  };

  return (
    <>
      <MapContainer center={center} zoom={6} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          /* noWrap => impedisce la ripetizione della mappa quando lo zoom è molto ridotto */
          noWrap={true}
          continuousWorld={false}
        />

        {/* Linea di collegamento */}
        <Polyline
          positions={polyline}
          pathOptions={pathColorOption}
          eventHandlers={{
            click: () => {
              setIsVisible(!isVisible);
            },
          }}>
          <Popup>Collegamento Catania - Roma - Varese</Popup>
        </Polyline>

        {/* Area circolare */}
        <CircleMarker
          center={[37.51197271259159, 15.087342191787926]}
          radius={16}
          pathOptions={greenColorOption}
          eventHandlers={{ click: (e) => console.log(e) }}>
          <Popup>Partenza</Popup>
        </CircleMarker>

        <CircleMarker
          center={[45.83267844558244, 8.800481141944358]}
          radius={16}
          pathOptions={redColorOption}>
          <Popup>Arrivo</Popup>
        </CircleMarker>

        {/* Area rettangolare */}
        <Rectangle bounds={rectangleValues} pathOptions={blueColorOption}>
          <Popup>Io sono un Popup, ma questa è la Sardegna</Popup>
          <Tooltip sticky>Sardegna in Tooltip sticky</Tooltip>
        </Rectangle>

        {/* Area (a scelta) passibile di cambiamenti dinamici*/}
        <TooltipCircle />
      </MapContainer>

      {isVisible ? (
        <div>
          <button onClick={() => setIsVisible(false)}>x</button>
          <p>Stai visualizzando i dati</p>
        </div>
      ) : null}
    </>
  );
};

export default VectorLayersMap;

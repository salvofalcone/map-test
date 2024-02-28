//React
import React, { useEffect, useState } from "react";

//React Leaflet
import {
  LayersControl,
  LayerGroup,
  MapContainer,
  Marker,
  TileLayer,
  Tooltip,
  useMap,
  useMapEvents,
} from "react-leaflet";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  onHandleSelectPlant,
  onSearchPlant,
} from "./store/layeredMapActions.js";
import { layeredMapActions } from "./store/layeredMapSlice.js";

//Style
import "leaflet/dist/leaflet.css";
import style from "./LayeredMap.module.scss";

//TODO: add a description of the component
const LayeredMap = () => {
  const dispatch = useDispatch();
  const {
    center,
    plantsData,
    searchResults,
    searchType,
    searchValue,
    selectedPlant,
  } = useSelector((state) => state.layeredMap);

  const [visibleMarkers, setVisibleMarkers] = useState(plantsData);

  const GetCenterData = () => {
    useMapEvents({
      moveend: (e) => {
        const updatedDataInfo = {
          bounds: e.target.getBounds(),
        };
        console.log(
          "🚀 ~ GetCenterData ~ updatedDataInfo.bounds:",
          updatedDataInfo.bounds
        );

        const visibleMarkers = plantsData.map((plant) => {
          const filteredThings = plant.things.filter((pump) =>
            updatedDataInfo.bounds.contains(pump.coordinates)
          );
          return { ...plant, things: filteredThings };
        });

        setVisibleMarkers(visibleMarkers);
      },
    });
    return null;
  };

  useEffect(() => {
    console.log("sto montando");

    const updatedDataInfo = {
      bounds: {
        _southWest: {
          lat: 39,
          lng: 13,
        },
        _northEast: {
          lat: 42,
          lng: 17,
        },
      },
    };

    //TODO: fix this function
    const visibleMarkers = plantsData.map((plant) => {
      const filteredThings = plant.things.filter(
        (pump) =>
          pump.coordinates.lat >= updatedDataInfo.bounds._southWest.lat &&
          pump.coordinates.lat <= updatedDataInfo.bounds._northEast.lat &&
          pump.coordinates.lng >= updatedDataInfo.bounds._southWest.lng &&
          pump.coordinates.lng <= updatedDataInfo.bounds._northEast.lng
      );
      return { ...plant, things: filteredThings };
    });

    setVisibleMarkers(visibleMarkers);
  }, []);

  return (
    <div>
      <MapContainer
        center={center}
        zoom={8}
        scrollWheelZoom={false}
        /* whenReady={(e) => console.log(e.target)} */
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          detectRetina={false}
        />
        <LayersControl position="topright">
          {visibleMarkers.map((plant) => (
            <LayersControl.Overlay
              name={plant.plant_name}
              key={plant.plant_id}
              checked={plant.isChecked}>
              <LayerGroup>
                {plant.things.map((pump, index) => (
                  <Marker key={index} position={pump.coordinates}>
                    <Tooltip>{pump.thing_name}</Tooltip>
                  </Marker>
                ))}
              </LayerGroup>
            </LayersControl.Overlay>
          ))}
        </LayersControl>
        <GetCenterData />
      </MapContainer>

      <div className={style.search}>
        <div className={style.search__top}>
          <input
            type="search"
            placeholder="Search plant's name..."
            value={searchValue}
            onChange={(e) =>
              dispatch(onSearchPlant(e, searchType, visibleMarkers))
            }
            className={style.search}
          />

          <div className={style.search__top__radios}>
            <input
              type="radio"
              name="plant"
              id="plant"
              onChange={() => {
                dispatch(layeredMapActions.setSearchType("PLANT"));
              }}
              checked={Boolean(searchType === "PLANT")}
            />
            <label htmlFor="plant">plant</label>

            <br />

            <input
              type="radio"
              name="pump"
              id="pump"
              value="PUMP"
              onChange={() => {
                dispatch(layeredMapActions.setSearchType("PUMP"));
              }}
              checked={Boolean(searchType === "PUMP")}
            />
            <label htmlFor="pump">pump</label>
          </div>
        </div>

        {/* TODO sistemare chiave-valore dentro gli oggetti */}
        <div className={style.search__bottom}>
          {searchResults.length > 0 ? (
            <div className={style.search__resultSection}>
              <p>Hai cercato :</p>
              {searchResults.map((el, index) => (
                <p
                  key={index}
                  onClick={() => dispatch(onHandleSelectPlant(el, plantsData))}
                  className={style.search__resultSection__resultItem}>
                  {el?.plant_name}
                  {el?.thing_name}
                </p>
              ))}
            </div>
          ) : (
            <p className={style.search__resultSection}>
              Nessun impianto trovato
            </p>
          )}

          {selectedPlant && (
            <div className={style.search__bottom__selectionSection}>
              <p>Hai selezionato l'impianto:</p>
              <p className={style.search__selectionSection__selectedItem}>
                {selectedPlant?.plant_name}
                {selectedPlant?.thing_name}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LayeredMap;

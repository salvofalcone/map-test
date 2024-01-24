//React
import React from "react";

//React Leaflet
import {
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup,
  Marker,
  Tooltip,
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

const LayeredMap = () => {
  const dispatch = useDispatch();

  //stati iniziali presi dallo store
  const {
    center,
    plantsData,
    searchResults,
    searchType,
    searchValue,
    selectedPlant,
  } = useSelector((state) => state.layeredMap);

  const GetCenterData = () => {
    useMapEvents({
      /*     dblclick: (e) => {
        console.log("doppio click");
      },

      dragend: (e) => {
        // const newCenter = e.target.getCenter();
        // const bounds = e.target.getBounds();
        // const oldCenter = e.target._lastCenter;
        console.log("drag-end");
      },

      dragstart: (e) => {
        console.log("drag-start");
      }, */

      moveend: (e) => {
        const updatedDataInfo = {
          newCenter: e.target.getCenter(),
          bounds: e.target.getBounds(),
          min: e.target.getBounds().getSouthWest(),
          max: e.target.getBounds().getNorthEast(),
        };

        const visibleMarkers = plantsData.flatMap((plant) =>
          plant.things.filter((pump) =>
            updatedDataInfo.bounds.contains(pump.coordinates)
          )
        );

        console.log("🚀 ~ GetCenterData ~ updatedDataInfo:", updatedDataInfo);
        console.log("🚀 ~ GetCenterData ~ visibleMarkers:", visibleMarkers);
      },
    });
    return null;
  };

  return (
    <div>
      <MapContainer center={center} zoom={8} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          detectRetina={false}
        />
        <LayersControl position="topright">
          {plantsData.map((plant) => (
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
            onChange={(e) => dispatch(onSearchPlant(e, searchType, plantsData))}
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

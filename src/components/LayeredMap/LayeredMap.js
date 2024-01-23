//React
import React from "react";

//React Leaflet
import {
  MapContainer,
  TileLayer,
  /* Popup, */
  LayersControl,
  LayerGroup,
  Marker,
  /* FeatureGroup, */
  Tooltip,
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
  const {
    center,
    plantsData,
    searchResults,
    searchType,
    searchValue,
    selectedPlant,
  } = useSelector((state) => state.layeredMap);

  return (
    <div>
      <MapContainer center={center} zoom={6} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          detectRetina={false}
        />
        <LayersControl position="topright">
          {plantsData.map((region) => (
            <LayersControl.Overlay
              name={region.plant_name}
              key={region.plant_id}
              checked={region.isChecked}>
              <LayerGroup>
                {region.things.map((province, index) => (
                  <Marker key={index} position={province.coordinates}>
                    <Tooltip>{province.thing_name}</Tooltip>
                  </Marker>
                ))}
              </LayerGroup>
            </LayersControl.Overlay>
          ))}
        </LayersControl>
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

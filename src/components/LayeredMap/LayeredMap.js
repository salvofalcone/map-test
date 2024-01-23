//! Sistemare commenti tutti in inglese

//React
import React, { useState } from "react";

import startingData from "../../data/startingData.js";

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

//Style
import "leaflet/dist/leaflet.css";
import style from "./LayeredMap.module.scss";

const LayeredMap = () => {
  const center = [41.5, 14]; //posizione centrale della mappa

  //Data for the map rendering
  const [plantsData, setPlantsData] = useState(startingData);

  //Data for the search bar and the results of the search
  const [searchData, setSearchData] = useState({
    searchValue: "",
    searchResults: [],
    searchType: "PLANT",
  });

  //Plant choosen by the user
  const [selectedPlant, setSelectedPlant] = useState();

  /**
   * This function handles the search of a plant based on the input value, updates value visualized in the input field and sets the value in the array searchData.
   */
  const onSearchPlant = (e) => {
    const value = e.target.value;
    const substring = value.toLowerCase();

    setSearchData((prev) => ({ ...prev, searchValue: value }));

    if (value.length >= 1) {
      switch (searchData.searchType) {
        //Ricerca impianto
        case "PLANT":
          const searchedPlants = plantsData.filter((plant) =>
            plant.plant_name.includes(substring)
          );

          setSearchData((prev) => ({ ...prev, searchResults: searchedPlants }));
          setSelectedPlant(null);
          break;

        //Ricerca pompa
        case "PUMP":
          const searchedPumps = plantsData
            .map((plant) => plant.things)
            .flat()
            .filter((singlePump) => singlePump.thing_name.includes(substring));

          setSearchData((prev) => ({ ...prev, searchResults: searchedPumps }));
          console.log("🚀 ~ onSearchPlant ~ searchedPumps:", searchedPumps);
          break;

        default:
          console.log("switch case - caso default - FIX IT!");
          break;
      }
    } else {
      setSearchData((prev) => ({ ...prev, searchResults: [] }));
    }
  };

  /**
   * This function sets the selected plant in the object searchData updating the status "isChecked" of the plant in the array plantsData and set the center of the map on the selected plant.
   */
  const onHandleSelectPlant = (plant) => {
    setSelectedPlant(plant);

    const updatedPlantsData = plantsData.map((el) => {
      if (el.plant_id === plant.plant_id) {
        return { ...el, isChecked: true };
      } else {
        return { ...el, isChecked: false };
      }
    });

    setPlantsData(updatedPlantsData);
  };

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
                  <Marker
                    key={index}
                    position={province.coordinates}
                    /*    eventHandlers={{ click: (e) => getTargetData(e) }} */
                  >
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
            value={searchData.searchValue}
            onChange={(e) => {
              onSearchPlant(e);
            }}
            className={style.search}
          />

          <div className={style.search__top__radios}>
            <input
              type="radio"
              name="plant"
              id="plant"
              onChange={() => {
                setSearchData((prev) => ({ ...prev, searchType: "PLANT" }));
              }}
              checked={Boolean(searchData.searchType === "PLANT")}
            />
            <label htmlFor="plant">plant</label>

            <br />

            <input
              type="radio"
              name="pump"
              id="pump"
              value="PUMP"
              onChange={() => {
                setSearchData((prev) => ({ ...prev, searchType: "PUMP" }));
              }}
              checked={Boolean(searchData.searchType === "PUMP")}
            />
            <label htmlFor="pump">pump</label>
          </div>
        </div>

        {/* TODO sistemare chiave-valore dentro gli oggetti */}
        <div className={style.search__bottom}>
          {searchData.searchResults.length > 0 ? (
            <div className={style.search__resultSection}>
              <p>Hai cercato :</p>
              {searchData.searchResults.map((el, index) => (
                <p
                  key={index}
                  onClick={() => onHandleSelectPlant(el)}
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

import { createSlice } from "@reduxjs/toolkit";

//Data for the map
import startingData from "../../../data/startingData";

//Data for the search bar and the results of the search
const initialState = {
  center: [41.5, 14],
  plantsData: startingData,
  searchResults: [],
  searchType: "PLANT",
  searchValue: "",
  selectedPlant: "",
};

export const layeredMapSlice = createSlice({
  name: "layeredMap",
  initialState,
  reducers: {
    setCenter: (state, action) => {
      state.center = action.payload;
    },

    setPlantsData: (state, action) => {
      state.plantsData = action.payload;
    },

    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },

    setSearchType: (state, action) => {
      state.searchType = action.payload;
    },

    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },

    setSelectedPlant: (state, action) => {
      state.selectedPlant = action.payload;
    },
  },
});

//reducers export
export const layeredMapActions = layeredMapSlice.actions;

//slice export
export default layeredMapSlice;

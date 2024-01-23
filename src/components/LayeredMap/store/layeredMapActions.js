//importo lo slice
import { layeredMapActions } from "./layeredMapSlice";

/**
 * This function handles the search of a plant based on the input value, updates value visualized in the input field and sets the value in the array searchData.
 */
export const onSearchPlant = (e, searchType, plantsData) => {
  return async (dispatch) => {
    const value = e.target.value;
    const substring = value.toLowerCase();

    dispatch(layeredMapActions.setSearchValue(value));

    if (value.length >= 1) {
      switch (searchType) {
        //Ricerca impianto
        case "PLANT":
          const searchedPlants = plantsData.filter((plant) =>
            plant.plant_name.toLowerCase().includes(substring)
          );

          dispatch(layeredMapActions.setSearchResults(searchedPlants));
          dispatch(layeredMapActions.setSelectedPlant(null));
          break;

        //Ricerca pompa
        case "PUMP":
          const searchedPumps = plantsData
            .map((plant) => plant.things)
            .flat()
            .filter((singlePump) =>
              singlePump.thing_name.toLowerCase().includes(substring)
            );

          dispatch(layeredMapActions.setSearchResults(searchedPumps));
          break;

        default:
          console.log("SWITCH CASE - DEFAULT - FIX THIS PART!");
          break;
      }
    } else {
      dispatch(layeredMapActions.setSearchResults([]));
    }
  };
};

/**
 * This function sets the selected plant in the object searchData updating the status "isChecked" of the plant in the array plantsData and set the center of the map on the selected plant.
 */
export const onHandleSelectPlant = (plant, plantsData) => {
  return async (dispatch) => {
    dispatch(layeredMapActions.setSelectedPlant(plant));

    const updatedPlantsData = plantsData.map((el) => {
      if (el.plant_id === plant.plant_id) {
        return { ...el, isChecked: true };
      } else {
        return { ...el, isChecked: false };
      }
    });

    dispatch(layeredMapActions.setPlantsData(updatedPlantsData));
  };
};

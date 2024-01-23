import { configureStore } from "@reduxjs/toolkit";
import layeredMapSlice from "../components/LayeredMap/store/layeredMapSlice";

const store = configureStore({
  reducer: {
    layeredMap: layeredMapSlice.reducer,
  },
});

export default store;

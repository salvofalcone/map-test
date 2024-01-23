import "./App.css";

import Map from "./components/Map/Map";
import VectorLayersMap from "./components/VectorLayersMap/VectorLayersMap";
import LayeredMap from "./components/LayeredMap/LayeredMap";

function App() {
  return (
    <main>
      <div className="map__container">
        {/* <Map /> */}
        {/* <VectorLayersMap /> */}

        <LayeredMap />
      </div>
    </main>
  );
}

export default App;

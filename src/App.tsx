import Map from "./components/Map";
import LocationSearch from "./components/LocationSearch";
import { useState } from "react";
import type { Location } from "./api/location";
function App() {
  // location state will either be a Location type or Null
  const [location, setLocation] = useState<Location | null>(null)

  return (
    <div className="App">
      {/* Passing state setter down to search component*/}
      <LocationSearch onLocationClick={(l) => {
        setLocation(l);
      }} />
      <Map location={location}/>
    </div>
  );
}

export default App;

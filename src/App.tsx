import Map from "./components/Map";
import LocationSearch from "./components/LocationSearch";
import { useState } from "react";
import type { Location } from "./api/location";
function App() {
  
  const [location, setLocation] = useState<Location | null>(null)

  return (
    <div className="App">
      <LocationSearch onLocationClick={(l) => {
        setLocation(l);
      }} />
      <Map location={location}/>
    </div>
  );
}

export default App;

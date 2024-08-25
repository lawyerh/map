import { useState } from "react";
import LocationCard from "./LocationCard";
import type { Location } from "../api/location";
import { fetchLocations } from "../api/fetchLocations";

// Defining the props this component expects
interface LocationSearchProps {
    // Expects one prop
    // Function that needs one argument of type Location and returns nothing
  onLocationClick: (location: Location) => void;
}

// Component props are being set to the interface defined above
function LocationSearch({ onLocationClick }: LocationSearchProps) {
    // locations state needs to be an array of Location type objects
  const [locations, setLocations] = useState<Location[]>([]);
  // term should be a string. Not necesarry to demand string because of type inference.
  const [term, setTerm] = useState<string>("");

  // Event object defined as react form element type
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Calls API and receives Location[] / Array of Location objects
    const results = await fetchLocations(term);
    setLocations(results);
  };

  return (
    <div className="search">
      <h2 className="heading">Search Locations</h2>
      <form action="" onSubmit={handleSubmit} className="search__form">
        <input
          type="text"
          className="search__input"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
      <div className="search__results">
        <h2 className="heading">Results</h2>
        <div className="search__results-container">
          {locations.map((item) => {
            return (
              <LocationCard
                key={item.id}
                name={item.name}
                id={item.id}
                onSelect={() => onLocationClick(item)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LocationSearch;

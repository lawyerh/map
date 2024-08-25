import { useState } from "react";
import LocationCard from "./LocationCard";
import type { Location } from "../api/location";
import { fetchLocations } from "../api/fetchLocations";

interface LocationSearchProps {
  onLocationClick: (location: Location) => void;
}

function LocationSearch({ onLocationClick }: LocationSearchProps) {
  const [locations, setLocations] = useState<Location[]>([]);
  const [term, setTerm] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Search API
    const results = await fetchLocations(term);
    setLocations(results)
  };
  // Map locations and display

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
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </div>
    </div>
  );
}

export default LocationSearch;

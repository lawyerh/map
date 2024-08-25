import type { Location } from "./location";

// Define a structure for returned json results from API call

interface SearchResults {
  features: {
    geometry: {
      coordinates: number[];
    };
    properties: {
      display_name: string;
      place_id: number;
    };
  }[];
}

// API url
const BASE_URL = "https://nominatim.openstreetmap.org/search?";

// function expects a string arguement
export async function fetchLocations(term: string) {
  const res = await fetch(
    `${BASE_URL}q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`
  );

  // saving data with the type defined at top of file
  // NOTE data contains all properties from api despite type declaration
  // Type declaration helps us quickly access the bits we're interested in
  const data: SearchResults = await res.json();
  console.log(data);

  // locations = array of Location types. Forces a consistent structure to each array element
  const locations: Location[] = data.features.map((feature) => {
    return {
      id: feature.properties.place_id,
      name: feature.properties.display_name,
      longitude: feature.geometry.coordinates[0],
      latitude: feature.geometry.coordinates[1],
    };
  });

  return locations;
}

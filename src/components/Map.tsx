import type { Location } from "../api/location";
import "leaflet/dist/leaflet.css";
import type { Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
 // Component expects one prop of type Location or null
interface MapProps {
  location: Location | null;
}
 // Demanding the props to match prop interface defined above
export default function Map({ location }: MapProps) {
    // useRef allows for storing data that does not cause rerender on change
    // Setting a ref to a Leaflet Map component
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    // If mapRef has a component and location has been selected
    if (mapRef.current && location) {
        // use the flyTo method to set the Lat and Long of the Map
      mapRef.current.flyTo([location.latitude, location.longitude]);
    }
  }, [location]);
  return (
    <div className="map">
      <MapContainer
        ref={mapRef}
        center={[40.7, -74]} // defaults to New York
        zoom={12}
        scrollWheelZoom
        className="map__leaf"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {location && (
          <Marker position={[location.latitude, location.longitude]} />
        )}
      </MapContainer>
    </div>
  );
}

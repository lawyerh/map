import type { Location } from "../api/location";
import "leaflet/dist/leaflet.css";
import type { Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

interface MapProps {
  location: Location | null;
}

export default function Map({ location }: MapProps) {
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (mapRef.current && location) {
      mapRef.current.flyTo([location.latitude, location.longitude]);
    }
  }, [location]);
  return (
    <div className="map">
      <MapContainer
        ref={mapRef}
        center={[40.7, -74]}
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

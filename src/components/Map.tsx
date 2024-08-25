import type { Location } from "../api/location";

interface MapProps {
  location: Location | null;
}

export default function Map({ location }: MapProps) {
  return <div className="map">MAP</div>;
}

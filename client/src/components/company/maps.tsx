import { useEffect, useRef } from "react";
import "./maps.css";

function Maps() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    const L = window.L;

    if (!L) {
      console.error("Leaflet n'est pas chargé correctement.");
      return;
    }

    if (mapRef.current && !mapInstance.current) {
      mapInstance.current = L.map(mapRef.current).setView(
        [48.582366922989564, 7.751033141729111],
        13,
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 13,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);

      L.marker([48.582366922989564, 7.751033141729111])
        .addTo(mapInstance.current)
        .bindPopup("Strasbourg");
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="map_container">
      <div id="map" ref={mapRef} style={{ height: "500px" }} />
    </div>
  );
}

export default Maps;

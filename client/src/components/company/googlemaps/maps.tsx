import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./maps.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 48.583141,
  lng: 7.745244,
};

function GoogleMaps() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyB91Fxw4ppZRDTVRvVyuTtA2JJBZfb6t50">
      <GoogleMap
        id=""
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      />
    </LoadScript>
  );
}

export default GoogleMaps;

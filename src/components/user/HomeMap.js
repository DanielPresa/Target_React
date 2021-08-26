import React, { useEffect } from 'react';

import { MapContainer, TileLayer, Marker, Popup } from '@monsonjeremy/react-leaflet';
import 'leaflet/dist/leaflet.css';

const DEFAULT_LONGITUDE = -34.907;
const DEFAULT_LATITUDE = -56.203;

function HomeMap() {
  
  let latitude = DEFAULT_LATITUDE;
  let longitude = DEFAULT_LONGITUDE;
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position =>
      setPosition({ x: position.coords.latitude, y: position.coords.longitude })
    );
  }, [latitude, longitude]);

  return (
    <div id="mapContainer">
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100vh' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default HomeMap;

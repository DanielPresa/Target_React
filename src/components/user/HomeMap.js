import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from '@monsonjeremy/react-leaflet';
import 'leaflet/dist/leaflet.css';

const DEFAULT_LONGITUDE = -34.907;
const DEFAULT_LATITUDE = -56.203;

const position = [DEFAULT_LATITUDE, DEFAULT_LONGITUDE];

function HomeMap() {
  function LocationMarker() {
    const [position, setPosition] = useState(null);

    const map = useMap();

    useEffect(() => {
      map.locate().on('locationfound', function(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }, []);

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <div id="mapContainer">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100vh' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}
export default HomeMap;

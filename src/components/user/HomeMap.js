import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from '@monsonjeremy/react-leaflet';
import 'leaflet/dist/leaflet.css';

const HomeMap = () => {
  const position = [-34.907, -56.203];

  return (
    <div id="mapContainer">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100vh' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
export default HomeMap;

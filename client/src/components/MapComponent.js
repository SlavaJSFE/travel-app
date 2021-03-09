import React from 'react';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../scss/map.scss';

// eslint-disable-next-line react/prop-types
export default function MapComponent({ center }) {
  console.log(Popup);
  return (
    <MapContainer center={center} zoom={10} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=NfC39NaWWZJzy5nYWV2N"
      />
      <Marker position={center}>
        <Popup>
          popup
        </Popup>
      </Marker>
    </MapContainer>
  );
}

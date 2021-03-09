/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useState } from 'react';
import L from 'leaflet';
import {
  TileLayer, Marker, Popup, GeoJSON, MapContainer,
} from 'react-leaflet';
import ToggleButton from '@material-ui/lab/ToggleButton';

import Fullscreen from '@material-ui/icons/Fullscreen';
import FullscreenExit from '@material-ui/icons/FullscreenExit';

import loc from '../assets/images/place.svg';
import geoJson from '../constants/geoJson.json';

import 'leaflet/dist/leaflet.css';
import '../scss/map.scss';

const createLayer = (currentCountry) => {
  const polygon = geoJson.features.find((el) => el.properties.name === currentCountry);
  const newJson = { type: 'FeatureCollection', features: [polygon] };

  return newJson;
};

export default function MapComponent({ country }) {
  const [FS, setFS] = useState(false);
  const { name, center } = country;

  const mapRef = useRef('');
  const map = mapRef.current;

  useEffect(() => {
    const fs = map.fullscreenElement;
    setFS(fs);
  }, [map, setFS]);

  console.log(mapRef);

  const polygon = createLayer(name);
  const markerIcon = new L.Icon({
    iconUrl: loc,
    iconSize: [45, 45],
  });

  const handleClick = (e) => {
    e.preventDefault();

    if (FS) {
      setFS(!FS);
      document.exitFullscreen();
    } else {
      setFS(!FS);
      map.requestFullscreen().catch((err) => console.log(err));
    }
  };

  return (
    <div ref={mapRef} className="map__container">
      <MapContainer center={center} zoom={4} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=NfC39NaWWZJzy5nYWV2N"
        />
        <GeoJSON data={polygon} />
        <Marker position={center} icon={markerIcon}>
          <Popup>
            popup
          </Popup>
        </Marker>
      </MapContainer>
      <ToggleButton
        style={
          {
            position: 'absolute',
            zIndex: 1000,
            top: 80,
            left: 10,
            background: '#fff',
            color: '#212121',
            fontSize: '18px',
            padding: 10,
          }

        }
        onClick={handleClick}
      >
        {
        FS ? <FullscreenExit /> : <Fullscreen />
      }
      </ToggleButton>
    </div>

  );
}

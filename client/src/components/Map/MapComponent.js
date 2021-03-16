/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useRef, useEffect, useState } from 'react';
import L from 'leaflet';
import {
  TileLayer, Marker, GeoJSON, MapContainer,
} from 'react-leaflet';

import ToggleButton from '@material-ui/lab/ToggleButton';
import Fullscreen from '@material-ui/icons/Fullscreen';
import FullscreenExit from '@material-ui/icons/FullscreenExit';

import createLayer from './utils';
import {
  ICON_WIDTH, ICON_HEIGHT, ZOOM_LEVEL, TILER_OBJ, ICON_LEFT, ICON_UP,
} from './constants';

import 'leaflet/dist/leaflet.css';
import './MapComponent.scss';

import marker from '../../assets/images/marker.png';

const btnStyles = {
  position: 'absolute',
  zIndex: 1000,
  top: 80,
  left: 10,
  background: '#fff',
  color: '#212121',
  fontSize: '18px',
  padding: 10,
};

export default function MapComponent({ country }) {
  const [fullscreen, setFullscreen] = useState(false);
  const { name, center } = country;
  const { url, attribution } = TILER_OBJ;

  const mapRef = useRef('');
  const map = mapRef.current;

  useEffect(() => {
    const isFullscreen = map.fullscreenElement;
    setFullscreen(isFullscreen);
  }, [map, setFullscreen]);

  const polygon = createLayer(name);
  const markerIcon = new L.Icon({
    iconUrl: marker,
    iconSize: [ICON_WIDTH, ICON_HEIGHT],
    iconAnchor: [ICON_LEFT, ICON_UP],
  });

  const handleClick = (e) => {
    e.preventDefault();

    if (fullscreen) {
      setFullscreen(!fullscreen);
      document.exitFullscreen();
    } else {
      setFullscreen(!fullscreen);
      map.requestFullscreen().catch((err) => console.log(err));
    }
  };

  return (
    <div ref={mapRef} className="map__container">
      <MapContainer center={center} zoom={ZOOM_LEVEL} scrollWheelZoom>
        <TileLayer
          attribution={attribution}
          url={url}
        />
        <GeoJSON data={polygon} />
        <Marker position={center} icon={markerIcon} />
      </MapContainer>
      <ToggleButton
        style={btnStyles}
        onClick={handleClick}
        value="bold"
      >
        {
        fullscreen ? <FullscreenExit /> : <Fullscreen />
      }
      </ToggleButton>
    </div>

  );
}

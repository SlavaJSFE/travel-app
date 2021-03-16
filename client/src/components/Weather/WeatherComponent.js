import React from 'react';

import './owfont-regular.css';
import './Weather.scss';

export default function WeatherComponent({ weather }) {
  const { main, name } = weather;
  const [sky] = weather.weather;
  const { description, id } = sky;

  return (
    <div className="weather-widget">
      <div className="weather__right">
        <span className="weather__city">
          {name}
        </span>
        <span className="weather__temperature">
          {`${Math.round(main.temp)}`}
          &deg;
          <span>{`feels like ${Math.round(main.feels_like)}`}</span>
        </span>
      </div>
      <div className="weather__left">
        <div className={`owf owf-${id}`} />
        <span className="weather__description">
          {description}
        </span>
      </div>

    </div>

  );
}

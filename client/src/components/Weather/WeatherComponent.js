import React from 'react';

import './owfont-regular.css';
import './Weather.scss';

export default function WeatherComponent({ weather }) {
  const { main, name, wind } = weather;
  const [sky] = weather.weather;
  const { description, id } = sky;

  return (
    <div className="weather-widget">
      <div className="weather__city">{name}</div>
      <div className="weather__icon">
        <span className="weather__temperature">
          {`${Math.round(main.temp)}`}
          &deg;
        </span>
        <span className={`owf owf-${id}`} />
      </div>
      <div className="weather__description">
        <div className="weather__icon-description">{description}</div>
        <div>{`feels like ${Math.round(main.feels_like)}`}</div>
        <div className="weather__wind-humidity">
          <span>{`Hum.: ${main.humidity}%`}</span>
          <span>{`Wind: ${Math.round(wind.speed)}m/s`}</span>
        </div>
      </div>
    </div>
  );
}

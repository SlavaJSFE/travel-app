/* eslint-disable react/prop-types */
import React from 'react';

export default function WeatherComponent({ weather }) {
  const { main } = weather;
  console.log(main);
  return (
    <div className="weather-widget">
      <div> Weather </div>
      <span>{`t ${main.temp_max}`}</span>
    </div>

  );
}

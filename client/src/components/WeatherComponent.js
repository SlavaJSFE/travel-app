/* eslint-disable react/prop-types */
import React from 'react';

export default function WeatherComponent({ weather }) {
  const { main } = weather;
  return (
    <div>
      <div> Weather </div>
      <span>{`t ${main.temp_max}`}</span>
    </div>

  );
}

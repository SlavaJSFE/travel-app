/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@material-ui/core/Box';

export default function WeatherComponent({ weather }) {
  const { main } = weather;
  return (
    <Box>
      <div> Weather </div>
      <span>{`t ${main.temp_max}`}</span>
    </Box>

  );
}

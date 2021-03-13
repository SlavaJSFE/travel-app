/* eslint-disable react/prop-types */
import React from 'react';

export default function CurrencyWidget({ base, rate, code }) {
  const flagURL = `https://www.countryflags.io/${code}/shiny/32.png`;

  return (
    <div className="currency__row">
      <img src={flagURL} alt="flag" />
      <span>{base}</span>
      <span>{rate}</span>
    </div>
  );
}

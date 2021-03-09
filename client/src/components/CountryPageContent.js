import React from 'react';
import { useParams } from 'react-router-dom';

import countries from '../constants/countries';

import MapComponent from './MapComponent';

export default function CountryPageContent() {
  const { name } = useParams();

  const country = countries.find((el) => el.name.toLowerCase() === name);

  return (
    <div>
      <h2>{country.capital}</h2>
      <MapComponent country={country} />
    </div>
  );
}

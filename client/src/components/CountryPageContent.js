/* eslint-disable no-console */
import React from 'react';
import { useParams } from 'react-router-dom';

import countries from '../constants/countries';

export default function CountryPageContent() {
  const { name } = useParams();
  console.log(name);
  const country = countries.find((el) => el.name.toLowerCase() === name);
  console.log(country);

  return (
    <div>
      <h2>{country.capital}</h2>
    </div>
  );
}

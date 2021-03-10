/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import countries from '../constants/countries';
import { countryReq } from '../redux/actions/country';

import MapComponent from './MapComponent';

export default function CountryPageContent() {
  const { name } = useParams();
  const country = countries.find((el) => el.name.toLowerCase() === name);
  const dispatch = useDispatch();
  dispatch(countryReq(country.name));
  const currentInfo = useSelector((state) => state.countriesStore.currentCountry.info);

  return (
    <div>
      <h2>{country.capital}</h2>
      <h3>{currentInfo}</h3>
      <h4>{country.name}</h4>
      <button type="button" className="authorization__btn" onClick={() => dispatch(countryReq(country.name))}>Get country</button>
      <MapComponent country={country} />
    </div>
  );
}

/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import countries from '../constants/countries';
import { countryReq } from '../redux/actions/country';

import MapComponent from './MapComponent';

export default function CountryPageContent() {
  const { name } = useParams();
  const country = countries.find((el) => el.name.toLowerCase() === name);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(countryReq(country.name));
  }, [dispatch, country.name]);
  // dispatch(countryReq(country.name));

  const currentCountry = useSelector((state) => state.countriesStore.currentCountry);

  // console.log(typeof currentGallery);
  const { info, photo, gallery } = currentCountry;
  console.log(info, photo, gallery);

  return (
    <div>
      <h2>{country.capital}</h2>
      <h3>{info}</h3>
      <h4>{name}</h4>
      <img src={photo} alt="Somebody" />
      {/* <img src={currentGallery[0]} alt="Somebody" />
      <img src={currentGallery[1]} alt="Somebody" />
      <img src={currentGallery[2]} alt="Somebody" />
      <img src={currentGallery[3]} alt="Somebody" />
      <img src={currentGallery[4]} alt="Somebody" />
      <img src={currentGallery[5]} alt="Somebody" /> */}
      <button type="button" className="authorization__btn" onClick={() => dispatch(countryReq(country.name))}>Get country</button>
      <MapComponent country={country} />
    </div>
  );
}

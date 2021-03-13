/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import countries from '../constants/countries';
import fetchCountry from '../redux/countryData/actions';

import MapComponent from './MapComponent';

export default function CountryPageContent() {
  const [loading, setLoading] = useState(true);
  const { name } = useParams();
  const country = countries.find((el) => el.name.toLowerCase() === name);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountry(country.name));

    return () => dispatch(fetchCountry(country.name));
  }, [dispatch, country.name]);
  // dispatch(countryReq(country.name));

  const currentCountry = useSelector((state) => state.countriesStore.data);
  const loadingCountry = useSelector((state) => state.countriesStore.loading);

  useEffect(() => {
    if (!loadingCountry) setLoading(false);
  }, [loadingCountry]);

  console.log(currentCountry);
  // console.log(typeof currentGallery);
  // const { info, photo, gallery } = currentCountry;
  // console.log(info, photo, gallery);

  return (
    <div>
      {
        loading ? <h1>loading</h1> : (
          <>
            <h2>{country.capital}</h2>
            <h3>{currentCountry.info}</h3>
            <h4>{name}</h4>
            <img src={currentCountry.photo} alt="Somebody" />
            <img src={currentCountry.gallery[0]} alt="Somebody" />
            <img src={currentCountry.gallery[1]} alt="Somebody" />
            <img src={currentCountry.gallery[2]} alt="Somebody" />
            <img src={currentCountry.gallery[3]} alt="Somebody" />
            <img src={currentCountry.gallery[4]} alt="Somebody" />
            <img src={currentCountry.gallery[5]} alt="Somebody" />
            {/* <button type="button" className="authorization__btn" onClick={() => dispatch(countryReq(country.name))}>Get country</button> */}
            <MapComponent country={country} />
          </>
        )
      }

    </div>
  );
}

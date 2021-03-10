import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import fetchWeather from '../redux/weather/actions';
import fetchCurrency from '../redux/currency/actions';

import countries from '../constants/countries';

import MapComponent from './MapComponent';
import WeatherComponent from './WeatherComponent';
import App2 from '../app2';

export default function CountryPageContent() {
  const { name } = useParams();

  const country = countries.find((el) => el.name.toLowerCase() === name);
  const { capital } = country;

  const weatherData = useSelector((state) => state.weather.data);
  // const currencyData = useSelector((state) => state.currency.data);
  const loadingW = useSelector((state) => state.weather.loading);
  const loadingC = useSelector((state) => state.currency.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([
      dispatch(fetchWeather(capital)),
      dispatch((fetchCurrency())),
    ]);
  }, [dispatch, capital]);
  console.log(loadingW, loadingC, weatherData);

  return (
    <div>
      <h2>{country.capital}</h2>
      {' '}
      {
        loadingC || loadingW ? <h2>loading</h2> : (
          <>
            <WeatherComponent weather={weatherData} />
            <MapComponent country={country} />
          </>
        )
      }

    </div>
  );
}

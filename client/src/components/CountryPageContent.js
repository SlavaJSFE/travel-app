/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { BeatLoader } from 'react-spinners';

import fetchWeather from '../redux/weather/actions';
import fetchCurrency from '../redux/currency/actions';

import countries from '../constants/countries';

import MapComponent from './MapComponent';
import WeatherComponent from './WeatherComponent';

import fetchCountry from '../redux/actions/country';

export default function CountryPageContent() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);

  const country = countries.find((el) => el.name.toLowerCase() === name);

  const { capital } = country;
  const weatherData = useSelector((state) => state.weather.data);
  const currencyData = useSelector((state) => state.currency.data);
  const loadingW = useSelector((state) => state.weather.loading);
  const loadingC = useSelector((state) => state.currency.loading);
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.countries.currentCountry);

  useEffect(() => {
    Promise.all(
      [
        dispatch(fetchCountry(country.name)),
        dispatch(fetchWeather(capital)),
        dispatch(fetchCurrency()),
      ],
    );
  }, [dispatch, capital]);

  useEffect(() => {
    if (!loadingC && !loadingW) setLoading(false);
  }, [loadingC, loadingW]);

  console.log(weatherData, currencyData, countryData);

  return (
    <div>
      {
        loading ? <BeatLoader />
          : (
            <>
              <h2>{country.capital}</h2>
              <WeatherComponent weather={weatherData} />
              <MapComponent country={country} />
            </>
          )

      }

    </div>
  );
}

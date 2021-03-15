/* eslint-disable no-unused-vars */
import './scss/CountryPage.scss';
import { Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import CountryPhoto from '../components/CountryPhoto';
import countries from '../constants/countries';
import Description from '../components/Description';
import MapComponent from '../components/MapComponent';
import WeatherComponent from '../components/WeatherComponent';
import CurrencyWidget from '../components/CurrencyWidget';
import CapitalDateTime from '../components/CapitalDateTime';
import VideoComponent from '../components/VideoComponent';

import fetchWeather from '../redux/weather/actions';
import fetchCurrency from '../redux/currency/actions';
// import fetchCountry from '../redux/countryData/actions';
import { removeData, fetchCountry } from '../redux/countryData/actions';

export default function CountryPage() {
  const { name } = useParams();
  const location = useLocation();
  const { pathname } = location;
  const [page, setPage] = useState('');
  const [loading, setLoading] = useState(true);
  const country = countries.find((element) => element.name.toLowerCase() === name);
  const capital = `The capital: ${country.capital}`;

  const [currentCountry, setCurrentCountry] = useState({});

  const weatherData = useSelector((state) => state.weather.data);
  const currencyData = useSelector((state) => state.currency.data);
  const countryData = useSelector((state) => state.country.data);

  const currencyLoading = useSelector((state) => state.currency.loading);
  const weatherLoading = useSelector((state) => state.weather.loading);
  const countryLoading = useSelector((state) => state.country.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountry(country.name));
    if (!countryLoading) setCurrentCountry(countryData);

    return () => {
      dispatch(removeData());
    };
  }, [dispatch]);

  useEffect(() => {
    if (countryData.country === country.name) {
      dispatch(fetchWeather(countryData.capital));
      dispatch(fetchCurrency(country.curr));
    }
  }, [countryLoading, countryData.country]);

  useEffect(() => {
    if (!currencyLoading && !weatherLoading && !countryLoading) setLoading(false);
  }, [currencyLoading, weatherLoading, countryLoading]);

  return (
    <Container>
      {
        loading ? <BeatLoader size={25} color="fuchsia" /> : (
          <div className="country-page">
            <div className="side-bar">
              <CapitalDateTime country={country} />
              <WeatherComponent weather={weatherData} />
              <CurrencyWidget currency={currencyData} code={country.code} />
            </div>
            <div className="main-content">
              <div className="country-name">{country.name}</div>
              <div className="country-capital">{capital}</div>

              <CountryPhoto image={countryData.photo} />
              <Description info={countryData.info} />
              <CountryPhoto image={countryData.gallery[0]} />
              <CountryPhoto image={countryData.gallery[1]} />
              <CountryPhoto image={countryData.gallery[2]} />
              <CountryPhoto image={countryData.gallery[3]} />
              <CountryPhoto image={countryData.gallery[4]} />
              <CountryPhoto image={countryData.gallery[5]} />
              <MapComponent country={country} />
            </div>
          </div>
        )
      }
    </Container>

  );
}

/* eslint-disable no-undef */
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

  useEffect(() => {
    setPage(pathname);
    console.log('current page is', page, 'pathname is', pathname);
  }, [setPage, pathname]);

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
    if (!loadingCountry) setCurrentCountry(countryData);

    return () => {
      dispatch(removeData());
    };
  }, [dispatch]);

  useEffect(() => {
    if (countryData.country === country.name) {
      dispatch(fetchWeather(countryData.capital));
      dispatch(fetchCurrency(country.curr));
    }
  }, [loadingCountry, countryData.country]);

  useEffect(() => {
    if (!currencyLoading && !weatherLoading && !countryLoading) setLoading(false);
  }, [currencyLoading, weatherLoading, countryLoading]);

  return (
    <Container>
      {
        loading ? <BeatLoader size={25} color="fuchsia" /> : (
          <div className="country-page">
            <div className="side-bar">
              <div className="clock-widget" />
              <WeatherComponent weather={weatherData} />
              <CurrencyWidget currency={currencyData} code={country.code} />
            </div>
            <div className="main-content">
              <div className="country-name">{countryData.info}</div>
              <div className="country-name">{country.name}</div>
              <div className="country-capital">{capital}</div>
              <CapitalDateTime country={country} />
              <CountryPhoto image={country.image} />
              <Description />
              <VideoComponent />
              <MapComponent country={country} />
            </div>
          </div>
        )
}
    </Container>

  );
}

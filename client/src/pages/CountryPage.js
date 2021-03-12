import './scss/CountryPage.scss';
import { Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import CountryPhoto from '../components/CountryPhoto';
import countries from '../constants/countries';
import Description from '../components/Description';
import MapComponent from '../components/MapComponent';
import WeatherComponent from '../components/WeatherComponent';

import fetchWeather from '../redux/weather/actions';
import fetchCurrency from '../redux/currency/actions';
import fetchCountry from '../redux/countryData/actions';

export default function CountryPage() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const country = countries.find((element) => element.name.toLowerCase() === name);
  const capital = `The capital: ${country.capital}`;

  const weatherData = useSelector((state) => state.weather.data);
  const countryData = useSelector((state) => state.country.data);
  const currencyData = useSelector((state) => state.currency.data);
  const loadingW = useSelector((state) => state.weather.loading);
  const loadingC = useSelector((state) => state.currency.loading);
  const loadingCountry = useSelector((state) => state.country.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(country.name);
    Promise.all(
      [
        dispatch(fetchCountry(country.name)),
        dispatch(fetchWeather(country.capital)),
        dispatch(fetchCurrency()),
      ],
    );
  }, [dispatch, capital, country.name]);

  useEffect(() => {
    if (!loadingC && !loadingW && !loadingCountry) setLoading(false);
  }, [loadingC, loadingW, loadingCountry]);

  console.log(weatherData, currencyData, countryData);

  const { info } = countryData;

  return (
    <Container style={{ textAlign: 'center' }}>

      {
        loading ? <BeatLoader size={25} color="fuchsia" /> : (
          <div className="country-page">
            <div className="side-bar">
              <div className="clock-widget" />
              <WeatherComponent weather={weatherData} />
              <div className="currency-widget" />
            </div>
            <div className="main-content">
              <div className="country-name">{country.name}</div>
              <h2>{info}</h2>
              <div className="country-capital">{capital}</div>
              <CountryPhoto image={country.image} />
              <Description />
              <MapComponent country={country} />
            </div>
          </div>
        )
      }

    </Container>
  );
}

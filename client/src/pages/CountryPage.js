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
import CurrencyWidget from '../components/CurrencyWidget';
import CapitalDateTime from '../components/CapitalDateTime';

import fetchWeather from '../redux/weather/actions';
import fetchCurrency from '../redux/currency/actions';
import fetchCountry from '../redux/countryData/actions';

export default function CountryPage() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const country = countries.find((element) => element.name.toLowerCase() === name);
  const capital = `The capital: ${country.capital}`;

  const weatherData = useSelector((state) => state.weather.data);
  const currencyData = useSelector((state) => state.currency.data);
  const countryData = useSelector((state) => state.country.data);

  const loadingC = useSelector((state) => state.currency.loading);
  const loadingW = useSelector((state) => state.weather.loading);
  const loadingCountry = useSelector((state) => state.country.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all(
      [
        dispatch(fetchWeather(country.capital)),
        dispatch(fetchCountry(country.name)),
        dispatch(fetchCurrency(country.curr)),
      ],
    );
  }, [dispatch, country.capital, country.name, country.curr]);

  useEffect(() => {
    if (!loadingC && !loadingW && !loadingCountry) setLoading(false);
  }, [loadingC, loadingW, loadingCountry]);

  return (
    <Container>
      {
        loading ? <div className="beat-loader"><BeatLoader size={25} color="fuchsia" /></div> : (
          <div className="country-page">
            <div className="side-bar">
              <div className="clock-widget" />
              <WeatherComponent weather={weatherData} />
              <CurrencyWidget currency={currencyData} code={country.code} />
            </div>
            <div className="main-content">
              <div className="country-name">{country.name}</div>
              <div className="country-capital">{capital}</div>
              <CapitalDateTime country={country} />
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

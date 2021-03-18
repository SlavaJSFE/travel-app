import './CountryPage.scss';
import { Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import { useTranslation } from 'react-i18next';
import ThumbnailGallery from '../../components/Gallery/ThumbnailGallery';

import CountryPhoto from '../../components/CountryPhoto/CountryPhoto';
import countries from '../../constants/countries';
import Description from '../../components/Description/Description';
import MapComponent from '../../components/Map';
import WeatherComponent from '../../components/Weather';
import CurrencyWidget from '../../components/Currency';
import CapitalDateTime from '../../components/CapitalDateTime';
import VideoComponent from '../../components/Video/VideoComponent';
import fetchWeather from '../../redux/weather/actions';
import fetchCurrency from '../../redux/currency/actions';
import { removeData, fetchCountry } from '../../redux/countryData/actions';

export default function CountryPage() {
  const weatherData = useSelector((state) => state.weather.data);
  const currencyData = useSelector((state) => state.currency.data);
  const countryData = useSelector((state) => state.country.data);
  const lang = useSelector((state) => state.language.language);
  const currencyLoading = useSelector((state) => state.currency.loading);
  const weatherLoading = useSelector((state) => state.weather.loading);
  const countryLoading = useSelector((state) => state.country.loading);
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const translate = t;
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const country = countries.find((element) => element.name.toLowerCase() === name);
  // const capital = `${translate('The capital')}: ${countryData[lang].capital}`;

  const [setCurrentCountry] = useState({});

  useEffect(() => {
    dispatch(fetchCountry(country.name));
    if (!countryLoading) setCurrentCountry(countryData);

    return () => {
      dispatch(removeData());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    if (countryData.country === country.name) {
      const { capital } = countryData[lang];

      dispatch(fetchWeather(capital, lang));
      dispatch(fetchCurrency(country.curr));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryLoading, countryData.country, lang]);

  useEffect(() => {
    if (!currencyLoading && !weatherLoading && !countryLoading) setLoading(false);
  }, [currencyLoading, weatherLoading, countryLoading]);

  return (
    <Container>
      {
        loading ? <div className="beat-loader"><BeatLoader size={25} color="fuchsia" /></div> : (
          <div className="country-page">
            <div className="side-bar">
              <CapitalDateTime country={country} />
              <div className="divider" />
              <WeatherComponent lang={lang} weather={weatherData} />
              <div className="divider" />
              <CurrencyWidget currency={currencyData} code={country.code} />
            </div>
            <div className="main-content">
              <div className="country-name">
                {countryData[lang].country}
              </div>
              <div className="country-capital">
                {`${translate('The capital')}: ${countryData[lang].capital}`}
              </div>
              <CountryPhoto image={countryData.photo} />
              <Description info={countryData[lang].info} />
              <ThumbnailGallery />
              <MapComponent country={country} />
              <VideoComponent country={country.name} />
            </div>
          </div>
        )
      }
    </Container>
  );
}

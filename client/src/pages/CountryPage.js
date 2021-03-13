import './scss/CountryPage.scss';
import { Container } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import CountryPhoto from '../components/CountryPhoto';
import countries from '../constants/countries';
import Description from '../components/Description';
import MapComponent from '../components/MapComponent';
import CapitalDateTime from '../components/CapitalDateTime';

export default function CountryPage() {
  const { name } = useParams();
  const country = countries.find((element) => element.name.toLowerCase() === name);
  const capital = `The capital: ${country.capital}`;

  return (
    <Container>
      <div className="country-page">
        <div className="side-bar">
          <div className="clock-widget" />
          <div className="weather-widget" />
          <div className="currency-widget" />
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
    </Container>
  );
}

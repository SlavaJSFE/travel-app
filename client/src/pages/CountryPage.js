import './CountryPage.scss';
import { Container } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import CountryPhoto from '../components/CountryPhoto';
import countries from '../constants/countries';
import Description from '../components/Description';

export default function CountryPage() {
  const { name } = useParams();
  const country = countries.find((element) => element.name.toLowerCase() === name);

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
          <div className="country-capital">{country.capital}</div>
          <CountryPhoto image={country.image} />
          <Description />
        </div>
        {/* <h2>{country.capital}</h2>
         */}
      </div>
    </Container>
  );
}

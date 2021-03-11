import { Container, Box } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../constants/countries';

export default function MainPage() {
  function createCards() {
    return countries.map((country) => {
      const path = `country/${country.name.toLowerCase()}`;
      return (
        <Box className="country-card" boxShadow={3} key={country.name}>
          <Link to={path}>
            <img src={country.image} alt={country.name} />
            <div className="card-names">
              <div className="card-country-name" color="secondary.main">{country.name}</div>
              <div className="card-country-capital">{country.capital}</div>
            </div>
          </Link>
        </Box>
      );
    });
  }

  const cards = createCards();

  return (
    <div className="main-page">
      <Container>
        <div className="cards-container">
          {cards}
        </div>
      </Container>
    </div>
  );
}

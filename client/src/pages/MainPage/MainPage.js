import React from 'react';
import { Container, Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './MainPage.scss';

export default function MainPage() {
  const countries = useSelector((state) => state.countries.searchResult);

  return (
    <div className="main-page">
      <Container>
        <div className="cards-container">
          {
            countries.map((country) => (
              <Box className="country-card" boxShadow={3} key={country.name}>
                <Link to={country.path}>
                  <img src={country.image} alt={country.name} />
                  <div className="card-names">
                    <div className="card-country-name" color="secondary.main">{country.name}</div>
                    <div className="card-country-capital">{country.capital}</div>
                  </div>
                </Link>
              </Box>
            ))
          }
        </div>
      </Container>
    </div>
  );
}

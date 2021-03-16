import { Container, Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import countriesEn from '../constants/countries-en';
import countriesPl from '../constants/countries-pl';
import countriesRu from '../constants/countries-ru';
import setCountriesList from '../redux/search/actions';
import './scss/MainPage.scss';

export default function MainPage() {
  const currentLanguage = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  if (currentLanguage === 'en') {
    dispatch(setCountriesList(countriesEn));
  } else if (currentLanguage === 'ru') {
    dispatch(setCountriesList(countriesRu));
  } else if (currentLanguage === 'pl') {
    dispatch(setCountriesList(countriesPl));
  }

  const countries = useSelector((state) => state.search.data);

  // useEffect(() => {
  //   console.log(countries);
  // }, [countries]);

  return (
    <div className="main-page">
      <Container>
        <div className="cards-container">
          {
            countries.map((country) => {
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
            })
          }
        </div>
      </Container>
    </div>
  );
}

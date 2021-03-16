import { Container, Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import countriesEn from '../constants/countries-en';
import countriesPl from '../constants/countries-pl';
import countriesRu from '../constants/countries-ru';
import { setCountriesList } from '../redux/countries/actions';
import './scss/MainPage.scss';

export default function MainPage() {
  // const currentLanguage = useSelector((state) => state.language.language);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (currentLanguage === 'en') {
  //     dispatch(setCountriesList(countriesEn));
  //   } else if (currentLanguage === 'ru') {
  //     dispatch(setCountriesList(countriesRu));
  //   } else if (currentLanguage === 'pl') {
  //     dispatch(setCountriesList(countriesPl));
  //   }
  // }, [currentLanguage, dispatch]);
  const countriesDefault = useSelector((state) => state.countries.list);
  const countriesSearchResult = useSelector((state) => state.countries.searchResult);
  const countries = countriesSearchResult.length === 0 ? countriesDefault : countriesSearchResult;
  // useEffect(() => {
  //   console.log(countries, currentLanguage);
  // }, [countries, currentLanguage]);

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

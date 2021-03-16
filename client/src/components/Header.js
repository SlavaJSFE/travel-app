import React, { useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import AuthButtons from './AuthButtons';
import LanguageSelect from './LanguageSelect';
import './scss/Header.scss';
import Logo from '../assets/images/rta-logo.png';
import Search from './Search';
import { setCountriesList } from '../redux/countries/actions';
import countriesEn from '../constants/countries-en';
import countriesPl from '../constants/countries-pl';
import countriesRu from '../constants/countries-ru';

export default function Header() {
  const { isExact } = useRouteMatch();
  const currentLanguage = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentLanguage === 'en') {
      dispatch(setCountriesList(countriesEn));
    } else if (currentLanguage === 'ru') {
      dispatch(setCountriesList(countriesRu));
    } else if (currentLanguage === 'pl') {
      dispatch(setCountriesList(countriesPl));
    }
  }, [currentLanguage, dispatch]);

  return (
    <div className="header">
      <Container>
        <div className="top-bar">
          <Link to="/">
            <div className="ribbon">
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
            </div>
          </Link>
          <div className="header-links">
            <AuthButtons />
            <LanguageSelect />
          </div>
        </div>
        <h1 className="motto">
          EXPEND YOUR
          <span> WORLD</span>
        </h1>
        {isExact ? <Search /> : <div className="instead-search" />}
      </Container>
    </div>
  );
}

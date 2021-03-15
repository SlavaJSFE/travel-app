import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { Container, Button } from '@material-ui/core';
import AuthButtons from './AuthButtons';
import LanguageSelect from './LanguageSelect';
import './scss/Header.scss';
import Logo from '../assets/images/rta-logo.png';
import Search from './Search';

export default function Header() {
  const { isExact } = useRouteMatch();
  const { t } = useTranslation();

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
          {t('title1')}
          <span>{t('title2')}</span>
        </h1>
        {isExact ? <Search /> : <div className="instead-search" />}
      </Container>
    </div>
  );
}

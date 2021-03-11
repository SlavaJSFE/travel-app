/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import CountryPage from './pages/CountryPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Registration from './pages/RegistrationPage';

export default function useRoutes() {
  const isAuth = useSelector((state) => state.user.isAuth);

  if (isAuth) {
    return (
      <>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/country/:name">
            <CountryPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/country/:name">
          <CountryPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/registration" exact>
          <Registration />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

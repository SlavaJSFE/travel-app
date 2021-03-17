import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import CountryPage from './pages/CountryPage/CountryPage';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

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
          <RegistrationPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

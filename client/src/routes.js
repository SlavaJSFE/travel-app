import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CountryPage from './pages/CountryPage';
import MainPage from './pages/MainPage';

export default function useRoutes() {
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

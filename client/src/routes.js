/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import CountryPage from './pages/CountryPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Registration from './pages/RegistrationPage';
import { auth } from './redux/actions/user';

export default function useRoutes() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
    console.log(isAuth);
  });

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

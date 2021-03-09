import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CzechPage from './pages/Czech';
import FrancePage from './pages/France';
import GermanyPage from './pages/Germany';
import ItalyPage from './pages/Italy';
import LatviaPage from './pages/Latvia';
import NorwayPage from './pages/Norway';
import PolandPage from './pages/Poland';
import SwitzerlandPage from './pages/Switzerland';
import MainPage from './pages/MainPage';
import CountryPage from './components/CountryPageContent';

export default function useRoutes() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/country/:name" component={CountryPage} />
        {/* <Route path="/czech" exact>
          <CzechPage />
        </Route>
        <Route path="/france" exact>
          <FrancePage />
        </Route>
        <Route path="/germany" exact>
          <GermanyPage />
        </Route>
        <Route path="/italy" exact>
          <ItalyPage />
        </Route>
        <Route path="/latvia" exact>
          <LatviaPage />
        </Route>
        <Route path="/norway" exact>
          <NorwayPage />
        </Route>
        <Route path="/poland" exact>
          <PolandPage />
        </Route>
        <Route path="/switzerland" exact>
          <SwitzerlandPage />
        </Route> */}
        <Redirect to="/" />
      </Switch>
    </>
  );
}

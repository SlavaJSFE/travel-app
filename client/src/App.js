import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Login from './components/authorization/Login';
import Registration from './components/authorization/Registration';
import { auth } from './redux/actions/user';
import Footer from './components/Footer';
import useRoutes from './routes';
import './App.scss';

function App() {
  const routes = useRoutes();
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  });

  return (
    <div className="App">
      <Router>
        <Header />
        { !isAuth && (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
        </Switch>
        )}
      </Router>
      <Router>
        {routes}
      </Router>
      <Footer color="primary" />
    </div>
  );
}

export default App;

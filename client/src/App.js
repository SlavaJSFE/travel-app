import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header/index';
import { auth } from './redux/actions/user';
import Footer from './components/Footer/Footer';
import useRoutes from './routes';
import './App.scss';
import checkLocalStorage from './utils/checkLocalStorage';
import changeLanguage from './redux/language/actions';

function App() {
  const routes = useRoutes();
  const dispatch = useDispatch();
  const currentLanguage = checkLocalStorage();

  if (currentLanguage) {
    dispatch(changeLanguage(currentLanguage));
  }

  useEffect(() => {
    dispatch(auth());
  });

  return (
    <div className="App">
      <Router>
        <Header />
        {routes}
      </Router>
      <Footer color="primary" />
    </div>
  );
}

export default App;

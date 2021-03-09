import './App.scss';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import useRoutes from './routes';

function App() {
  const routes = useRoutes();

  return (
    <div className="App">
      <Header />
      <Router>
        {routes}
      </Router>
      <Footer color="primary" />
    </div>
  );
}

export default App;

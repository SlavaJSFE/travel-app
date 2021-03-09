import './App.scss';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import useRoutes from './routes';
import App2 from './app2';

function App() {
  const routes = useRoutes();

  return (
    <div className="App">
      <Header />
      <Router>
        {routes}
      </Router>
      <Footer color="primary" />
      <App2 />
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import fetchWeather from './redux/weather/actions';
import fetchCurrency from './redux/currency/actions';

// eslint-disable-next-line react/prop-types
const App2 = ({ city }) => {
  const weatherData = useSelector((state) => state.weather.data);
  // const currencyData = useSelector((state) => state.currency.data);
  const loadingW = useSelector((state) => state.weather.loading);
  const loadingC = useSelector((state) => state.currency.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([
      dispatch(fetchWeather(city)),
      dispatch((fetchCurrency())),
    ]);

    console.log(loadingW, loadingC, weatherData);
  }, [dispatch]);

  return (
    <div>
      <div>
        {loadingW ? (
          <h2>
            loading
          </h2>
        ) : (
          <h2>
            {' '}
            {weatherData.weather[0].id }
          </h2>
        )}
      </div>

      <div>
        {loadingC ? (
          <h2>
            loading
          </h2>
        ) : (
          <h2>
            woooow.loaded curr
          </h2>
        )}
      </div>

    </div>
  );
};

export default App2;

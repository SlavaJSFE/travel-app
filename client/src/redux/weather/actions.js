import axios from 'axios';

import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from './constants';

const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST,
});

const fetchWeatherSuccess = (data) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: data,
});

const fetchWeatherfail = (error) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error,
});

const fetchWeather = (city = 'Rome', lang = 'en') => (dispatch) => {
  dispatch(fetchWeatherRequest);

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=43a0da3daca90b8278a58b70b53ab20d&units=metric`)
    .then(
      (response) => {
        const { data } = response;
        dispatch(fetchWeatherSuccess(data));
      },
    )
    .catch(
      (error) => {
        const { messege } = error;
        dispatch(fetchWeatherfail(messege));
      },
    );
};

export default fetchWeather;

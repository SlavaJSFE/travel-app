import axios from 'axios';
import countries from '../../constants/countries';
import { FETCH_COUNTRIES_LIST_FAILURE, FETCH_COUNTRIES_LIST_REQUEST, FETCH_COUNTRIES_LIST_SUCCESS } from './constants';

const fetchCountriesListRequest = () => ({
  type: FETCH_COUNTRIES_LIST_REQUEST,
});

const fetchCountriesListSuccess = (data) => ({
  type: FETCH_COUNTRIES_LIST_SUCCESS,
  payload: data,
});

const fetchCountriesListFail = (error) => ({
  type: FETCH_COUNTRIES_LIST_FAILURE,
  payload: error,
});

// const fetchCountriesList = (language = 'en') => (dispatch) => {
//   dispatch(fetchCountriesListRequest);

//   try {
//     const response = axios.get('http://localhost:3030/api/search', { language });
//     console.log(language);
//   } catch (error) {
//     console.log(error);
//   }
// };

const fetchCountriesList = (language = 'en') => (dispatch) => {
  dispatch(fetchCountriesListRequest);
  const data = countries;
  dispatch(fetchCountriesListSuccess(data));
};

export { fetchCountriesList, fetchCountriesListSuccess };

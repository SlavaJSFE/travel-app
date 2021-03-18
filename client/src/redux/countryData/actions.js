import axios from 'axios';

import { FETCH_COUNTRY_REQUEST, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_FAILURE } from './constants';

const fetchCountryRequest = () => ({
  type: FETCH_COUNTRY_REQUEST,
});

const fetchCountrySuccess = (data) => ({
  type: FETCH_COUNTRY_SUCCESS,
  payload: data,
});

const fetchCountryfail = (error) => ({
  type: FETCH_COUNTRY_FAILURE,
  payload: error,
});

const removeData = () => ({
  type: 'REMOVE_DATA',
});

const fetchCountry = (country = 'Italy') => (dispatch) => {
  dispatch(fetchCountryRequest);

  axios.post('http://localhost:3030/oth/country', { country })
    .then(
      (response) => {
        const { data } = response;

        dispatch(fetchCountrySuccess(data));
      },
    )
    .catch(
      (error) => {
        const { messege } = error;
        dispatch(fetchCountryfail(messege));
      },
    );
};

export { removeData, fetchCountry };

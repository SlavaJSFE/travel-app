import axios from 'axios';

import { FETCH_CURRENCY_REQUEST, FETCH_CURRENCY_SUCCESS, FETCH_CURRENCY_FAILURE } from './constants';

const fetchCurrRequest = () => ({
  type: FETCH_CURRENCY_REQUEST,
});

const fetchCurrSuccess = (data) => ({
  type: FETCH_CURRENCY_SUCCESS,
  payload: data,
});

const fetchCurrfail = (error) => ({
  type: FETCH_CURRENCY_FAILURE,
  payload: error,
});

const fetchcurrency = (curr = 'EUR') => (dispatch) => {
  dispatch(fetchCurrRequest);

  axios.get(`https://api.exchangeratesapi.io/latest?base=${curr}`)
    .then(
      (response) => {
        const { data } = response;
        dispatch(fetchCurrSuccess(data));
      },
    )
    .catch(
      (error) => {
        const { messege } = error;
        dispatch(fetchCurrfail(messege));
      },
    );
};

export default fetchcurrency;

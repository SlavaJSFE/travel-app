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

  axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=24748a894f8066572db39383ece2c362&base=${curr}`)
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

/* eslint-disable import/prefer-default-export */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import axios from 'axios';
import { setCountry } from '../Sreducers/countryReducer';

export const fetchCountry = (country) => (dispatch) => {
  try {
    const response = axios.get('https://safe-beach-06882.herokuapp.com/oth/country',
      { country });
    // dispatch(setCountry(response.data.countries));
  } catch (e) {
    alert(`2 ${e.response.data.message}`);
  }
};

export default fetchCountry;

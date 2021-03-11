/* eslint-disable import/prefer-default-export */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import axios from 'axios';
import { setCountry } from '../Sreducers/countryReducer';

const fetchCountry = (country) => (dispatch) => {
  try {
    const response = axios.get('http://localhost:3030/oth/country',
      { country });
    alert(`1 ${response.data.message}`);
    console.log(response.data);
    dispatch(setCountry(response.data.countries));
  } catch (e) {
    alert(`2 ${e.response.data.message}`);
  }
};

export default fetchCountry;

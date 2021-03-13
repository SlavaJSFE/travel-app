/* eslint-disable import/prefer-default-export */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import axios from 'axios';
import { setCountry } from '../Sreducers/countryReducer';

export const countryReq = (country) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3030/oth/country',
      { country });
    console.log('!');
    alert(`1 ${response.data}`);
    console.log(response.data);
    dispatch(setCountry(response.data));
  } catch (e) {
    alert(`2 ${e.response.data.message}`);
  }
};

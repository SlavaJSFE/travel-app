import axios from 'axios';
import {setCountry} from "../reducers/countryReducer";

export const country =  (country) => {
  return async dispatch => {
    try {
      const response = await axios.get(`http://localhost:3030/api/country`,
          {country}
      );
      dispatch(setCountry(response.data.country));
    } catch (e) {
      alert(e.response.data.message);
    }
  }
}

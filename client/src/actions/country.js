import axios from 'axios';
import {setCountry} from "../reducers/countryReducer";

export const country = async (country) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3030/oth/country`,
          {country}
      );
      alert('1 ' + response.data.message);
      console.log(response.data);
      dispatch(setCountry(response.data.countries));
    } catch (e) {
      alert('2 ' + e.response.data.message);
    }
  }
}

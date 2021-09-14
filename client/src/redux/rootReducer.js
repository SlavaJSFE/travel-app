import { combineReducers } from 'redux';

import weatherReducer from './weather/reducer';
import currencyReducer from './currency/reducer';
import userReducer from './Sreducers/userReducer';
import countryReducer from './countryData/reducer';
import countriesReducer from './countries/reducer';
import languageReducer from './language/reducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  currency: currencyReducer,
  user: userReducer,
  country: countryReducer,
  countries: countriesReducer,
  language: languageReducer,
});

export default rootReducer;

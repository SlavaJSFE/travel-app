import { combineReducers } from 'redux';

import weatherReducer from './weather/reducer';
import currencyReducer from './currency/reducer';
import userReducer from './Sreducers/userReducer';
import countryReducer from './Sreducers/countryReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  currency: currencyReducer,
  user: userReducer,
  countriesStore: countryReducer,
});

export default rootReducer;

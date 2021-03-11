import { combineReducers } from 'redux';

import weatherReducer from './weather/reducer';
import currencyReducer from './currency/reducer';
import userReducer from './Sreducers/userReducer';
import countryReducer from './countryData/reducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  currency: currencyReducer,
  user: userReducer,
  countries: countryReducer,
});

export default rootReducer;

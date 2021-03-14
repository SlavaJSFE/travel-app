import { combineReducers } from 'redux';

import weatherReducer from './weather/reducer';
import currencyReducer from './currency/reducer';
import userReducer from './Sreducers/userReducer';
import countryReducer from './countryData/reducer';
import searchReducer from './search/reducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  currency: currencyReducer,
  user: userReducer,
  country: countryReducer,
  search: searchReducer,
});

export default rootReducer;

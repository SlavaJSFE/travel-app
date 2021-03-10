import { combineReducers } from 'redux';

import weatherReducer from './weather/reducer';
import currencyReducer from './currency/reducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  currency: currencyReducer,
});

export default rootReducer;

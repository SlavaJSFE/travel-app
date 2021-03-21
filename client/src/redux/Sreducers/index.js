/* eslint-disable import/prefer-default-export */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './userReducer';
import countryReducer from './countryReducer';

const rootReducer = combineReducers({
  user: userReducer,
  countries: countryReducer,

});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

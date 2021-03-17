import { SET_COUNTRIES_LIST, SET_SEARCH_RESULT } from './constants';

const initialState = {
  list: [],
  searchResult: [],
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES_LIST:
      return {
        ...state,
        list: action.payload,
      };

    case SET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload,
      };

    default: return state;
  }
};

export default countriesReducer;

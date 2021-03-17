import { SET_COUNTRIES_LIST, SET_SEARCH_RESULT } from './constants';

const setCountriesList = (data) => ({
  type: SET_COUNTRIES_LIST,
  payload: data,
});

const setSearchResult = (data) => ({
  type: SET_SEARCH_RESULT,
  payload: data,
});

export { setCountriesList, setSearchResult };

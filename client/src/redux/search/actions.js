import SET_COUNTRIES_LIST from './constants';

const setCountriesList = (data) => ({
  type: SET_COUNTRIES_LIST,
  payload: data,
});

export default setCountriesList;

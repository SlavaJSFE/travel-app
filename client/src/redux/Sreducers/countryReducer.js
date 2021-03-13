/* eslint-disable no-console */
const SET_COUNTRY = 'SET_COUNTRY';

const defaultState = {
  currentCountry: {},
};

export default function countryReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_COUNTRY:
      return {
        ...state,
        currentCountry: action.payload,
      };
    default:
      return state;
  }
}

export const setCountry = (countryS) => {
  console.log(countryS);
  return { type: SET_COUNTRY, payload: countryS };
};

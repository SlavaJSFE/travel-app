import { FETCH_COUNTRY_REQUEST, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_FAILURE } from './constants';

const initialState = {
  loading: true,
  data: {},
  error: '',
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case FETCH_COUNTRY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case FETCH_COUNTRY_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default: return state;
  }
};

export default countryReducer;

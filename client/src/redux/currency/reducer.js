import { FETCH_CURRENCY_REQUEST, FETCH_CURRENCY_SUCCESS, FETCH_CURRENCY_FAILURE } from './constants';

const initialState = {
  loading: true,
  data: [],
  error: '',
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case FETCH_CURRENCY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case FETCH_CURRENCY_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default: return state;
  }
};

export default currencyReducer;

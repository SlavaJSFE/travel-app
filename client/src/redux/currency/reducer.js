import { FETCH_CURRENCY_REQUEST, FETCH_CURRENCY_SUCCESS, FETCH_CURRENCY_FAILURE } from './constants';
import { REMOVE_DATA } from '../removeData';

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
        loading: true,
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
    case REMOVE_DATA:
      return initialState;
    default: return state;
  }
};

export default currencyReducer;

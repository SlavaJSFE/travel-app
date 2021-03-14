import { FETCH_COUNTRIES_LIST_FAILURE, FETCH_COUNTRIES_LIST_REQUEST, FETCH_COUNTRIES_LIST_SUCCESS } from './constants';

const initialState = {
  loading: true,
  data: [],
  error: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_LIST_REQUEST:
      return {
        ...state,
        loading: false,
      };

    case FETCH_COUNTRIES_LIST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };

    case FETCH_COUNTRIES_LIST_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default: return state;
  }
};

export default searchReducer;

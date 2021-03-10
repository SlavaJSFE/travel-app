import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from './constants';

const initialState = {
  loading: true,
  data: [],
  error: '',
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case FETCH_WEATHER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default: return state;
  }
};

export default weatherReducer;

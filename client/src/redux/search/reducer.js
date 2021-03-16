import SET_COUNTRIES_LIST from './constants';

const initialState = {
  data: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES_LIST:
      return {
        data: action.payload,
      };

    default: return state;
  }
};

export default searchReducer;

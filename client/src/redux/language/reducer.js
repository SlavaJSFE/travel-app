import CHANGE_LANGUAGE from './constants';

const initialState = {
  language: 'en',
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        language: action.payload,
      };

    default: return state;
  }
};

export default languageReducer;

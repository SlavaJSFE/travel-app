import CHANGE_LANGUAGE from './constants';

const changeLanguage = (data) => ({
  type: CHANGE_LANGUAGE,
  payload: data,
});

export default changeLanguage;

/* eslint-disable no-alert */
import axios from 'axios';
import { setUser } from '../Sreducers/userReducer';

export const registration = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3030/api/auth/registration', {
      email,
      password,
    });
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3030/api/auth/login', {
      email,
      password,
    });
    // console.log(response.data);
    dispatch(setUser(response.data.user));
    localStorage.setItem('token', response.data.token);
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const auth = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3030/api/auth/auth',
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    dispatch(setUser(response.data.user));
    localStorage.setItem('token', response.data.token);
  } catch (e) {
    localStorage.removeItem('token');
  }
};

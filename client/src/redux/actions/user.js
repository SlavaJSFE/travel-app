/* eslint-disable no-console */
/* eslint-disable no-alert */
import axios from 'axios';
import { setUser } from '../Sreducers/userReducer';

export const registration = async (email, password) => {
  try {
    const response = await axios.post('https://safe-beach-06882.herokuapp.com/api/auth/registration', {
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
    const response = await axios.post('https://safe-beach-06882.herokuapp.com/api/auth/login', {
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
    const response = await axios.get('https://safe-beach-06882.herokuapp.com/api/auth/auth',
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    dispatch(setUser(response.data.user));
    localStorage.setItem('token', response.data.token);
  } catch (e) {
    // localStorage.removeItem('token');
  }
};

export const uploadAvatar = (file) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post('https://safe-beach-06882.herokuapp.com/api/auth/avatar', formData,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    dispatch(setUser(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const deleteAvatar = () => async (dispatch) => {
  try {
    const response = await axios.delete('https://safe-beach-06882.herokuapp.com/api/auth/delete',
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    dispatch(setUser(response.data));
  } catch (e) {
    console.log(e);
  }
};

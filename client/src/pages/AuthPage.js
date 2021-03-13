import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './scss/authorization.scss';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { login, registration } from '../redux/actions/user';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { auth } = useParams();

  function setButton() {
    if (auth === 'login') {
      return (
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(login(email, password));
          }}
          variant="contained"
          color="secondary"
          size="large"
        >
          Log In
        </Button>
      );
    }

    if (auth === 'registration') {
      return (
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            registration(email, password);
          }}
          variant="contained"
          color="secondary"
          size="large"
        >
          Sign Up
        </Button>
      );
    }

    return null;
  }

  function setTitle() {
    if (auth === 'login') {
      return (
        <h2>LOG IN TO YOUR ACCOUNT</h2>
      );
    }

    if (auth === 'registration') {
      return (
        <h2>CREATE A NEW ACCOUNT</h2>
      );
    }

    return null;
  }

  const title = setTitle();
  const button = setButton();

  return (
    <form className="login-form">
      {title}
      <TextField
        id="email-input"
        label="Email"
        type="email"
        autoComplete="current-email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="form-button">
        {button}
      </div>
    </form>
    // <div className="authorization">
    //   <div className="authorization__header">Authorization</div>
    //   <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..." />
    //   <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..." />
    //   <button type="button" className="authorization__btn" onClick={() => dispatch(login(email, password))}>Log in</button>
    // </div>
  );
};

export default AuthPage;

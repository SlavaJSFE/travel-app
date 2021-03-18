import React, { useState } from 'react';
import './LoginPage.scss';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { login } from '../../redux/actions/user';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const translate = t;

  return (
    <form className="login-form">
      <h2>{translate('LOG IN TO YOUR ACCOUNT')}</h2>
      <TextField
        id="email-input"
        label={translate('Email')}
        type="email"
        autoComplete="current-email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="password-input"
        label={translate('Password')}
        type="password"
        autoComplete="current-password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="form-button">
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
          {translate('Log In')}
        </Button>
      </div>
    </form>
  );
};

export default LoginPage;

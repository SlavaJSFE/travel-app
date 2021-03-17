import React, { useState } from 'react';
import './RegistrationPage.scss';
import { Button, TextField } from '@material-ui/core';
import { registration } from '../../redux/actions/user';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className="login-form">
      <h2>CREATE A NEW ACCOUNT</h2>
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
      </div>
    </form>
  );
};

export default RegistrationPage;

import React, { useState } from 'react';
import './scss/authorization.scss';
import Input from '../components/input/Input';
import { registration } from '../redux/actions/user';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="authorization">
      <div className="authorization__header">Registration</div>
      <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..." />
      <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..." />
      <button type="button" className="authorization__btn" onClick={() => registration(email, password)}>To reg</button>
    </div>
  );
};

export default Registration;

import React, { useState } from 'react';
import './scss/authorization.scss';
import { useDispatch } from 'react-redux';
import Input from '../components/input/Input';
import { login } from '../redux/actions/user';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="authorization">
      <div className="authorization__header">Authorization</div>
      <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..." />
      <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..." />
      <button type="button" className="authorization__btn" onClick={() => dispatch(login(email, password))}>Log in</button>
    </div>
  );
};

export default LoginPage;

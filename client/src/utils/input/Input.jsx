/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './input.scss';

const Input = (props) => (
  <input
    onChange={(event) => props.setValue(event.target.value)}
    value={props.value}
    type={props.type}
    placeholder={props.placeholder}
  />
);

export default Input;

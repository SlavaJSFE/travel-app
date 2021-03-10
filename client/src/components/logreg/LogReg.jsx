/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './LogReg.scss';
import { NavLink } from 'react-router-dom';
import { Grid, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/Sreducers/userReducer';

const LogReg = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  return (
    <Grid item sm={3}>
      <Box>
        { !isAuth && <div className="navbar__login"><NavLink to="/login">Log in</NavLink></div> }
        { !isAuth && <div className="navbar__registration"><NavLink to="/registration">Sign in</NavLink></div> }
        {isAuth && (
        <div className="navbar__login" onClick={() => dispatch(logout())}>
          <NavLink to="/">Exit</NavLink>
        </div>
        ) }
      </Box>
    </Grid>

  );
};

export default LogReg;

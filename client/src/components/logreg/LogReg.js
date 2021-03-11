/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './LogReg.scss';
import { Link } from 'react-router-dom';
import { Grid, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/Sreducers/userReducer';

const LogReg = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  return (
    <Grid item sm={3}>
      <Box>
        { !isAuth && <div className="navbar__login"><Link to="/login">Log In</Link></div> }
        { !isAuth && <div className="navbar__registration"><Link to="/registration">Sign Up</Link></div> }
        {isAuth && (
        <div className="navbar__login" onClick={() => dispatch(logout())}>
          <Link to="/">Exit</Link>
        </div>
        ) }
      </Box>
    </Grid>

  );
};

export default LogReg;

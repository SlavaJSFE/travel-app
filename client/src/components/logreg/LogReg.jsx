import React, {useState} from 'react';
import './LogReg.scss';
import {NavLink} from "react-router-dom";
import {Grid, Box} from '@material-ui/core';

const LogReg = () => {
  return (
    <Grid item sm={3}>
      <Box>
        { /*!isAuth &&*/ <div className="navbar__login"><NavLink to="/login">Log in</NavLink></div> }
        { /*!isAuth &&*/ <div className="navbar__registration"><NavLink to="/registration">Sign in</NavLink></div> }
      </Box>
      </Grid>
    
  );
};

export default LogReg;

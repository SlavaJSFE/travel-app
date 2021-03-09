import React from 'react';
import './LogReg.scss';
import {NavLink} from "react-router-dom";
import {Grid, Box, Link} from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";

const LogReg = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  return (
    <Grid item sm={3}>
      <Box>
        { !isAuth && <div className="navbar__login"><NavLink to="/login">Log in</NavLink></div> }
        { !isAuth && <div className="navbar__registration"><NavLink to="/registration">Sign in</NavLink></div> }
        {isAuth && <div className="navbar__login" onClick={() => dispatch(logout()) }>  
          <Link href="#">
            Exit
          </Link></div> }
      </Box>
    </Grid>
    
  );
};

export default LogReg;

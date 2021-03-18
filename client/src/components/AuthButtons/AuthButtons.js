/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './AuthButtons.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { useTranslation } from 'react-i18next';
import { logout } from '../../redux/Sreducers/userReducer';

const AuthButtons = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const translate = t;

  const showAuthButtons = () => {
    if (isAuth) {
      return (
        <div className="navbar__login" onClick={() => dispatch(logout())}>
          <Link to="/">
            <Button size="small" startIcon={<DirectionsRunIcon />} style={{ color: '#ffffff' }}>
              {translate('Log Out')}
            </Button>
          </Link>
        </div>
      );
    }

    return (
      <div className="auth-buttons">
        <Link to="/login">
          <Button size="small" startIcon={<VpnKeyIcon />} style={{ color: '#ffffff' }}>
            {translate('Log In')}
          </Button>
        </Link>
        <Link to="/registration">
          <Button size="small" startIcon={<PersonAddIcon />} style={{ color: '#ffffff' }}>
            {translate('Sign Up')}
          </Button>
        </Link>
      </div>
    );
  };

  const buttons = showAuthButtons();

  return (
    <div className="auth-buttons">
      {buttons}
    </div>
  );
};

export default AuthButtons;

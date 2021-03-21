/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './AuthButtons.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useTranslation } from 'react-i18next';
import avatarLogo from '../../assets/images/avatar.svg';
import { logout } from '../../redux/Sreducers/userReducer';

const AuthButtons = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  let avatar = useSelector((state) => state.user.currentUser.avatar);
  avatar = avatar ? `data:image/jpeg;base64, ${avatar}` : avatarLogo;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const translate = t;

  const showAuthButtons = () => {
    if (isAuth) {
      return (
        <>
          <Link to="/profile">
            <img src={avatar} alt="Avatar logo" className="small-avatar" />
          </Link>
          <div className="navbar__login" onClick={() => dispatch(logout())}>
            <Button size="small" style={{ color: '#ffffff' }}>
              {translate('Log Out')}
            </Button>
          </div>
        </>
      );
    }

    return (
      <>
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
      </>
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

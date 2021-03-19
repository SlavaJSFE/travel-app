import React from 'react';
import { Button, Container } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import avatarLogo from '../../assets/images/avatar.svg';
import { deleteAvatar, uploadAvatar } from '../../redux/actions/user';
import './Profile.scss';

const Profile = () => {
  const { t } = useTranslation();
  const translate = t;
  const dispatch = useDispatch();
  const avatarInDB = useSelector((state) => state.user.currentUser.avatar);
  const avatar = avatarInDB ? `data:image/jpeg;base64, ${avatarInDB}` : avatarLogo;

  function changeHandler(e) {
    const file = e.target.files[0];
    dispatch(uploadAvatar(file));
  }

  return (
    <Container>
      <div className="profile">
        <div className="profile-left">
          <div className="avatar">
            <img src={avatar} alt="" />
          </div>
          <div className="upload-avatar">
            <label htmlFor="upload-file">
              <input
                accept="image/*"
                className="upload-input"
                id="upload-file"
                type="file"
                onChange={(e) => changeHandler(e)}
              />
              <Button
                variant="contained"
                color="secondary"
                component="span"
                startIcon={<PhotoCamera />}
              >
                {avatarInDB ? translate('Change') : translate('Upload')}
              </Button>
            </label>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => dispatch(deleteAvatar())}
            >
              {translate('Remove Photo')}
            </Button>
          </div>
        </div>
        <div className="profile-right">
          <Container>
            <h2 className="profile-title">{translate('My account')}</h2>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Profile;

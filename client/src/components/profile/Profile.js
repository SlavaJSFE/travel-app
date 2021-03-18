import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAvatar, uploadAvatar } from '../../redux/actions/user';

const Profile = () => {
  const dispatch = useDispatch();

  function changeHandler(e) {
    const file = e.target.files[0];
    dispatch(uploadAvatar(file));
  }

  return (
    <div>
      <button type="button" onClick={() => dispatch(deleteAvatar())}>Удалить аватар с сервера</button>
      <p>Загрузить аватар на сервер</p>
      <input accept="image/*" onChange={(e) => changeHandler(e)} type="file" placeholder="Загрузить аватар" />
    </div>
  );
};

export default Profile;

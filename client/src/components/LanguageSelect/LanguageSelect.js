import React from 'react';
import { useDispatch } from 'react-redux';
import LanguageIcon from '@material-ui/icons/Language';
import './LanguageSelect.scss';
import changeLanguage from '../../redux/language/actions';

export default function LanguageSelect() {
  const dispatch = useDispatch();

  function handleLangSwitch(event) {
    const currentLanguage = event.target.value;
    dispatch(changeLanguage(currentLanguage));
  }

  return (
    <div className="language">
      <LanguageIcon fontSize="small" className="language-icon" />
      <select className="language-select" onChange={handleLangSwitch}>
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="pl">Polski</option>
      </select>
    </div>
  );
}

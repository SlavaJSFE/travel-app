import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@material-ui/icons/Language';
import './LanguageSelect.scss';
import changeLanguage from '../../redux/language/actions';

export default function LanguageSelect() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const language = localStorage.getItem('language');

  function handleLangSwitch(event) {
    const currentLanguage = event.target.value;
    dispatch(changeLanguage(currentLanguage));
    i18n.changeLanguage(currentLanguage);
    localStorage.setItem('language', currentLanguage);
  }

  return (
    <div className="language">
      <LanguageIcon fontSize="small" className="language-icon" />
      <select
        className="language-select"
        onChange={handleLangSwitch}
        value={language || 'en'}
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="pl">Polski</option>
      </select>
    </div>
  );
}

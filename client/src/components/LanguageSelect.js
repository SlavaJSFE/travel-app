import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import './scss/LanguageSelect.scss';

export default function LanguageSelect() {
  return (
    <div className="language">
      <LanguageIcon fontSize="small" className="language-icon" />
      <select className="language-select">
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="pl">Polski</option>
      </select>
    </div>
  );
}

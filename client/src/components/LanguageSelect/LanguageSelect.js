/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-new */
import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import '../scss/LanguageSelect.scss';

export default function LanguageSelect() {
  return (
    <div className="language">

      {/* <a href="#" onClick="doGTranslate('en|en');return false;" title="English" className="gflag nturl english">
      <img src="//gtranslate.net/flags/blank.png" height="32" width="32" alt="English" />
    </a>
    <a href="#" onClick="doGTranslate('en|pl');return false;" title="Polish" className="gflag nturl polish">
      <img src="//gtranslate.net/flags/blank.png" height="32" width="32" alt="Polish" />
    </a>
    <a href="#" onClick="doGTranslate('en|ru');return false;" title="Russian" className="gflag nturl russian">
      <img src="//gtranslate.net/flags/blank.png" height="32" width="32" alt="Russian" />
    </a> */}

      <LanguageIcon fontSize="small" className="language-icon" />
      {/* <select onChange={doGTranslate(this)}>
      <option value="">Select Language</option>
      <option value="en|en">English</option>
      <option value="en|pl">Polish</option>
      <option value="en|ru">Russian</option>
    </select>
    <div id="google_translate_element2" /> */}
    </div>
  );
}

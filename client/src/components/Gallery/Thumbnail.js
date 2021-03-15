/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

const Thumbnail = ({ imgUrl, index, onClick }) => (
  <div className="gallery-preview">
    <img src={imgUrl} data-index={index} onClick={onClick} alt="s" />
  </div>
)

export default Thumbnail;

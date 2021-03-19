import React from 'react';

const Thumbnail = ({ imgUrl, index, onClick, activePhoto }) => {
  const clazz = index === Number(activePhoto) ? 'gallery-preview activGallery-preview' : 'gallery-preview';
  return (
    <div className={clazz}>
      <img src={imgUrl} data-index={index} onClick={onClick} alt="s" aria-hidden="true" />
    </div>
  );
};

export default Thumbnail;

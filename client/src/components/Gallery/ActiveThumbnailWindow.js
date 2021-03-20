import React from 'react';

const ActiveThumbnailWindow = ({ activeThumbnail }) => {
  const showSlider = () => {
    console.log('test');
  };
  return (
    <div className="active-window" onClick={showSlider} aria-hidden="true">
      <img src={activeThumbnail.src} alt="imgGallery" />
    </div>
  );
};

export default ActiveThumbnailWindow;

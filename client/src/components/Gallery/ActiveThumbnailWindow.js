import React from 'react';

const ActiveThumbnailWindow = ({ activeThumbnail }) => (
  <div className="active-window">
    <img src={activeThumbnail} alt="imgGallery" />
  </div>
);

export default ActiveThumbnailWindow;

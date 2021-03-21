import React from 'react';
import Thumbnail from './Thumbnail';

const ThumbnailGrid = ({ thumbnailPhotos, onClick, activePhoto }) => (
  <div className="thumbnail-grid">
    {
      thumbnailPhotos.map((thumbnailPhoto, i) => (
        <Thumbnail
          activePhoto={activePhoto}
          key={thumbnailPhoto.photoId}
          imgUrl={thumbnailPhoto.src}
          index={i}
          onClick={onClick}
        />
      ))
    }
  </div>
);

export default ThumbnailGrid;

import React from 'react';
import Thumbnail from './Thumbnail';

// eslint-disable-next-line no-unused-vars
const ThumbnailGrid = ({ thumbnails, thumbnailPhotos, onClick }) => (
  <div className="thumbnail-grid">
    {
      thumbnailPhotos.map((thumbnailPhoto, i) => (
        <Thumbnail
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

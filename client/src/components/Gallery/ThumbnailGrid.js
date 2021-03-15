import React from 'react';
import Thumbnail from './Thumbnail';

const ThumbnailGrid = ({ thumbnails, onClick }) => (
  <div className="thumbnail-grid">
    {thumbnails.map((thumbnail, i) => (
      <Thumbnail
        key={thumbnail.imgUrl}
        imgUrl={thumbnail.imgUrl}
        index={i}
        onClick={onClick}
      />
    ))}
  </div>
);

export default ThumbnailGrid;

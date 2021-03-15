import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ActiveThumbnailWindow from './ActiveThumbnailWindow';
import ThumbnailGrid from './ThumbnailGrid';
import './gallery.scss';

const ThumbnailGallery = () => {
  const [thumbnails, setThumbnails] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/DZuz14/56b7f363e9787fb4c0240eb145bc2b9f/raw/e0b67d18352704d155929b7e27e0dae08cc383b6/data.json',
      )
      .then((res) => setThumbnails(res.data.thumbnails));
  }, []);

  const handleClick = (e) => {
    const activeIndex2 = e.target.getAttribute('data-index');
    setActiveIndex(activeIndex2);
  };

  const renderThumbnails = () => (thumbnails.length ? (
    <>
      <ActiveThumbnailWindow activeThumbnail={thumbnails[activeIndex]} />
      <ThumbnailGrid thumbnails={thumbnails} onClick={handleClick} />
    </>
  ) : null);

  const renderTextContent = () => (thumbnails.length ? (
    <>
      <h1>{thumbnails[activeIndex].title}</h1>
      <p>{thumbnails[activeIndex].bodyText}</p>
    </>
  ) : null);

  return (
    <div className="country-gallery">
      <div className="left">{renderThumbnails()}</div>
      <div className="right">{renderTextContent()}</div>
    </div>
  );
};

export default ThumbnailGallery;

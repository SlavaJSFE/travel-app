import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { useSelector } from 'react-redux';
import ActiveThumbnailWindow from './ActiveThumbnailWindow';
import ThumbnailGrid from './ThumbnailGrid';
import './gallery.scss';

const ThumbnailGallery = () => {
  const [thumbnails, setThumbnails] = useState([]);
  const [thumbnailPhotos, setThumbnailsPhoto] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const countryData = useSelector((state) => state.country.data);

  useEffect(() => {
    // axios
    //   .get(
    //     'https://gist.githubusercontent.com/DZuz14/56b7f363e9787fb4c0240eb145bc2b9f/raw/e0b67d18352704d155929b7e27e0dae08cc383b6/data.json',
    //   )
    //   .then((res) => setThumbnails(res.data.thumbnails));
    setThumbnails(countryData);
    setThumbnailsPhoto(countryData.gallery);
  }, [countryData]);

  const handleClick = (e) => {
    const activeIndex2 = e.target.getAttribute('data-index');
    setActiveIndex(activeIndex2);
  };

  const renderThumbnails = () => (thumbnailPhotos.length ? (
    <>
      <ActiveThumbnailWindow activeThumbnail={thumbnailPhotos[activeIndex]} />
      <ThumbnailGrid
        thumbnails={thumbnails}
        thumbnailPhotos={thumbnailPhotos}
        onClick={handleClick}
      />
    </>
  ) : null);

  const renderTextContent = () => (thumbnails.length ? null : (
    <>
      {/* <h1>{thumbnails[activeIndex].title}</h1> */}
      <h1>{thumbnails.capital}</h1>
      <p>{thumbnails.info}</p>
    </>
  ));

  return (
    <div className="country-gallery">
      <div className="left">{renderThumbnails()}</div>
      <div className="right">{renderTextContent()}</div>
    </div>
  );
};

export default ThumbnailGallery;

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ActiveThumbnailWindow from './ActiveThumbnailWindow';
import ThumbnailGrid from './ThumbnailGrid';
import './gallery.scss';
import ShowSlider from './ShowSlider';

const ThumbnailGallery = (props) => {
  const { showSlider } = props;
  const [thumbnails, setThumbnails] = useState([]);
  const [thumbnailPhotos, setThumbnailsPhoto] = useState([]);
  const [thumbnailDescription, setThumbnailsDescription] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const countryData = useSelector((state) => state.country.data);
  const lang = useSelector((state) => state.language.language);

  useEffect(() => {
    setThumbnails(countryData);
    setThumbnailsPhoto(countryData.gallery);
    setThumbnailsDescription(countryData[lang]);
  }, [countryData, lang]);

  const handleClick = (e) => {
    const activeIndex2 = e.target.getAttribute('data-index');
    setActiveIndex(activeIndex2);
  };

  const renderThumbnails = () => (thumbnailPhotos.length ? (
    <>
      <ActiveThumbnailWindow activeThumbnail={thumbnailPhotos[activeIndex]} />
      <ThumbnailGrid
        activePhoto={activeIndex}
        thumbnails={thumbnails}
        thumbnailPhotos={thumbnailPhotos}
        onClick={handleClick}
      />
    </>
  ) : null);

  const renderTextContent = () => (thumbnailDescription.description !== undefined ? (
    <>
      <h1>{thumbnailDescription.description[activeIndex].title}</h1>
      <p>{thumbnailDescription.description[activeIndex].about}</p>
    </>
  ) : null);

  return (
    <div className="country-gallery" showSlider={showSlider}>
      <div className="left">{renderThumbnails()}</div>
      <ShowSlider showSlider={showSlider} />
      <div className="right">{renderTextContent()}</div>
    </div>
  );
};

export default ThumbnailGallery;

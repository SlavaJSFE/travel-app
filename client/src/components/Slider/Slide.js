import React, { memo } from 'react';
import './Slider.scss';

const Slide = ({ content, width }) => {
  const style = {
    backgroundImage: `url(${content})`,
    width: `${width}px`,
  };
  return (
    <div
      className="slide"
      style={style}
    />
  );
};

export default memo(Slide);

import React, { memo } from 'react';
import './Slider.scss';

const Slide = ({ content, width }) => {
  const contentStyle = `url('${content}')`;
  const widthStyle = `${width}px`;
  return (
    <div
      className="slide"
      style={`width: ${widthStyle};
            background-image:${contentStyle};`}
    />
  );
};

export default memo(Slide);

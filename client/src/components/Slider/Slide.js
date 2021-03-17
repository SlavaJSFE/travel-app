import React, { memo } from 'react';
import './Slider.scss';

const Slide = ({ content, width }) => {
  // const contentStyle = `url('${content}')`;
  // const widthStyle = `${width}px`;
  console.log(content);
  const style = {
    backgroundImage: `url(${content})`,
  };
  return (
    <div
      className="slide"
      style={style}
    // style={`width: ${widthStyle};
    // background-image:${contentStyle};`}
    />
  );
};

export default memo(Slide);

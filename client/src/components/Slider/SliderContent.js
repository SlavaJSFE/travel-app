import React from 'react';
import './Slider.scss';

const SliderContent = ({
  translate, transition, width, children,
}) => {
  const style = {
    transform: `translateX(-${translate}px)`,
    transition: `transform ease-out ${transition}s`,
    width: `${width}px`,
  };
  return (
    <div
      className="sliderContent"
      style={style}
    >
      {children}
    </div>
  );
};

export default SliderContent;

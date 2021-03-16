import React from 'react';
import './Slider.scss';

const SliderContent = ({
  translate, transition, width, children,
}) => {
  const transform = `translateX(-${translate}px)`;
  const transitionStyle = `transform ease-out ${transition}s`;
  const widthStyle = `${width}px`;
  return (
    <div
      className="sliderContent"
      style={`transform: ${transform};
              transition: ${transitionStyle};
              width: ${widthStyle};`}
    >
      {children}
    </div>
  );
};

export default SliderContent;

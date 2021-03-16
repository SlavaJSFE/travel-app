import React, { memo } from 'react';
import leftArrow from '../img/left-arrow.svg';
import rightArrow from '../img/right-arrow.svg';
import './Slider.scss';

const Arrow = ({ direction, handleClick }) => {
  const directionStyle = direction === 'right' ? 'right: 25px' : 'left: 25px';
  const directionImgStyle = direction === 'left' ? '-2' : '2';
  const directionImg = direction === 'right' ? rightArrow : leftArrow;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="arrow"
      onClick={handleClick}
      style={`${directionStyle};`}
      aria-hidden="true"
    >
      <img
        style={`transform: translateX(${directionImgStyle}px);`}
        src={directionImg}
        alt="img"
      />
    </div>
  );
};

export default memo(Arrow);

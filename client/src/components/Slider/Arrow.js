import React, { memo } from 'react';
import leftArrow from '../img/left-arrow.svg';
import rightArrow from '../img/right-arrow.svg';
import './Slider.scss';

const Arrow = ({ direction, handleClick }) => {
  const directionImgStyle = direction === 'left' ? '-2' : '2';
  const directionImg = (direction === 'right' ? rightArrow : leftArrow);
  const directionArrow = (direction === 'right' ? 'right-arrow' : 'left-arrow');
  const clazz = directionArrow.concat(' arrow');
  const style = {
    transform: `translate(${directionImgStyle}px`,
  };
  return (
    <div
      className={clazz}
      onClick={handleClick}
      aria-hidden="true"
    >
      <img
        style={style}
        src={directionImg}
        alt="img"
      />
    </div>
  );
};

export default memo(Arrow);

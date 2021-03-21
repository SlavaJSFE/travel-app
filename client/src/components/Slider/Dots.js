import React, { memo } from 'react';
import './Slider.scss';

const Dot = ({ active }) => {
  const style = {
    background: active ? 'black' : 'white',
  };
  return (
    <span
      className="dotActive"
      style={style}
    />
  );
};

const MemoDot = memo(Dot);

// eslint-disable-next-line arrow-body-style
const Dots = ({ slides, activeSlide }) => {
  return (
    <div
      className="slide-dots"
    >
      {slides.map((slide, i) => (
        <MemoDot key={slide} active={activeSlide === i} />
      ))}
    </div>
  );
};

export default Dots;

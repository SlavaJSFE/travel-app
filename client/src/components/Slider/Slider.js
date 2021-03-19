import React, { useState, useEffect, useRef } from 'react';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';
import './Slider.scss';

const getWidth = () => window.innerWidth;

const Slider = (props) => {
  const { slides } = props;
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  });

  const {
    activeSlide, translate, transition,
  } = state;

  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();
  const sliderRef = useRef();

  const isLastSlide = () => {
    if (Math.abs(translate) >= Math.abs(((slides.length - 1) * getWidth()))) return true;
    return false
  }

  const isFirstSlide = () => {
    if (translate === 0) return true;
    return false
  }

  const nextSlide = () => setState({
    ...state,
    translate: isLastSlide() ? 0 : translate + getWidth(),
    activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
  });

  const prevSlide = () => setState({
    ...state,
    translate: isFirstSlide() ? (slides.length - 1) * getWidth() : translate - getWidth(),
    activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
  });

  const smoothTransition = () => {
    // eslint-disable-next-line no-underscore-dangle
    let slides2 = [];

    if (activeSlide === slides.length - 1) {
      slides2 = [slides[slides.length - 2], lastSlide, firstSlide];
    } else if (activeSlide === 0) {
      slides2 = [lastSlide, firstSlide, secondSlide];
    } else {
      slides2 = slides.slice(activeSlide - 1, activeSlide + 2);
    }

    setState({
      ...state,
      slides2,
      transition: 0,
      translate: getWidth(),

    });
  };

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 });
  };

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const slider = sliderRef.current;

    const play = () => {
      autoPlayRef.current();
    };

    const smooth = (e) => {
      if (e.target.className.includes('SliderContent')) {
        transitionRef.current();
      }
    };

    const resize = () => {
      resizeRef.current();
    };

    const transitionEnd = slider.addEventListener('transitionend', smooth);
    const onResize = window.addEventListener('resize', resize);

    let interval = null;

    if (props.autoPlay) {
      interval = setInterval(play, props.autoPlay * 1000);
    }

    return () => {
      slider.removeEventListener('transitionend', transitionEnd);
      window.removeEventListener('resize', onResize);

      if (props.autoPlay) {
        clearInterval(interval);
      }
    };
  }, [props.autoPlay]);

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
  }, [state, transition]);

  console.log({ state, slides, getWidth: getWidth() })

  return (
    <div className="slider" ref={sliderRef}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * slides.length}
      >
        {slides.map((slide, i) => (
          <Slide key={`${slide.toString() + i}`} width={getWidth()} content={slide} />
        ))}
      </SliderContent>

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />

      <Dots slides={slides} activeSlide={activeSlide} />
    </div>
  );
};

export default Slider;

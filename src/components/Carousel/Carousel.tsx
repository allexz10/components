/* eslint-disable react/no-array-index-key */
import { useState } from 'react';

import carouselData from '../../data/CarouselData';
import './Carousel.scss';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const arrayLength = carouselData.length;

  const nextSlide = () => {
    if (activeSlide === arrayLength - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(arrayLength - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  const clickHandle = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className="carousel">
      <span className="prev__button" onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </span>
      <span className="next__button" onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </span>
      {carouselData.map((item, index) => (
        <div
          className={index === activeSlide ? 'slide active' : 'slide'}
          key={item.id}
          style={{ background: item.backgroundColor }}
        >
          {index === activeSlide && (
            <>
              <h1 className="slide__title">{item.title}</h1>
              <h3 className="slide__subtitle">{item.subtitle}</h3>
              <p className="slide__text">{item.text}</p>
            </>
          )}
        </div>
      ))}
      <div className="dots__wrapper">
        {carouselData.map((item, index) => (
          <div
            className={index === activeSlide ? 'dot active' : 'dot'}
            key={index}
            onClick={() => clickHandle(index)}
          >
            {}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Rating.scss';

const Rating = () => {
  const [starRating, setStarRating] = useState<number>(2);
  const [starHover, setStartHover] = useState<number>(2);
  return (
    <>
      {[{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }].map(
        (star, index) => {
          const ratingValue = index + 1;

          return (
            <label htmlFor={star.id} key={star.id}>
              <FaStar
                className="star"
                onMouseEnter={() => setStartHover(ratingValue)}
                onMouseLeave={() => setStartHover(0)}
                color={
                  ratingValue <= (starHover || starRating)
                    ? '#faaf00'
                    : '#dddddd'
                }
              />
              <input
                className="input__radio"
                id={star.id}
                type="radio"
                value={ratingValue}
                onClick={() => {
                  if (ratingValue >= index && starRating !== ratingValue) {
                    setStarRating(index + 1);
                  } else {
                    setStarRating(0);
                  }
                }}
              />
            </label>
          );
        },
      )}
    </>
  );
};

export default Rating;

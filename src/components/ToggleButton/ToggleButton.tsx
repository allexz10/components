import React, { useState } from 'react';
import toggleButtonsData from '../../data/ToogleButtonsData';
import './ToggleButton.scss';

const ToggleButton = () => {
  const [activeButton, setActiveButton] = useState<number>(0);

  const clickHandle = (index: number) => {
    setActiveButton(index);
  };
  return (
    <>
      <div className="toggle__wrapper">
        {toggleButtonsData.map((item, index) => (
          <button
            style={{
              border: activeButton === index ? '2px solid #636363' : '',
            }}
            className="toggle__button"
            onClick={() => clickHandle(index)}
            key={item.title}
          >
            <img
              className="toggle__button--image"
              src={item.imgSrc}
              alt={item.title}
            />
          </button>
        ))}
      </div>
      <div className="toggle__text">
        {toggleButtonsData.map((item, index) => (
          <p
            className="toggle__text--item"
            key={item.title}
            // @ts-ignore
            style={{ textAlign: item.title }}
          >
            {activeButton === index ? item.text : ''}
          </p>
        ))}
      </div>
    </>
  );
};

export default ToggleButton;

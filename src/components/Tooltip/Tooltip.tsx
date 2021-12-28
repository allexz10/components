import { useState } from 'react';
import './Tooltip.scss';

const Tooltip = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <button
        className="button"
        onClick={() => null}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        Hover me to see
      </button>
      <span
        className={isVisible ? 'button__tooltip visible' : 'button__tooltip'}
      >
        Simple tooltip
      </span>
    </>
  );
};

export default Tooltip;

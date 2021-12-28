import { useState } from 'react';
import './Switch.scss';

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label htmlFor="checkbox" className="checkbox">
      <input
        className="checkbox__input"
        id="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <span className="checkbox__styled" />
    </label>
  );
};

export default Switch;

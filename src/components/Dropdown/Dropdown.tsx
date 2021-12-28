/* eslint-disable no-restricted-globals */
import { useState, useRef } from 'react';
import dropdownData from '../../data/DropdownData';
import './Dropdown.scss';

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('Dropdown Button');

  const button = useRef<HTMLButtonElement>(null);

  return (
    <div className="dropdown">
      <button
        className="dropdown__button"
        ref={button}
        onClick={() => setIsActive(!isActive)}
      >
        {selected}
      </button>
      <div className={isActive ? 'dropdown__list active' : 'dropdown__list'}>
        {dropdownData.map(({ id, title }) => (
          <div
            className="dropdown__list--item"
            key={id}
            onClick={() => {
              setSelected(title);
              setIsActive(!isActive);
              button.current?.focus();
            }}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;

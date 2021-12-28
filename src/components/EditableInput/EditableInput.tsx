/* eslint-disable no-restricted-globals */
import React, { useEffect, useState, useRef } from 'react';
import './EditableInput.scss';

const EditableInput = () => {
  const [inputValue, setInputValue] = useState('Rasengan ⚡️');
  const [editValue, setEditValue] = useState('Rasengan ⚡️');
  const [activeButton, setActiveButton] = useState(false);

  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    input.current?.focus();
  }, [activeButton]);

  return (
    <>
      <input
        className="editable__input"
        type="text"
        ref={input}
        value={inputValue}
        disabled={!activeButton}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <div className="buutons__wrapper">
        <button
          className="editable__button editable__button--edit"
          style={{ display: activeButton ? 'none' : 'block' }}
          onClick={() => {
            setActiveButton(!activeButton);
          }}
        >
          <img
            className="button__edit--image"
            src="./edit__icon.svg"
            alt="edit pic"
          />
        </button>
        <div
          className={
            activeButton ? 'buttons__wrapper visible' : 'buttons__wrapper'
          }
          onClick={() => setActiveButton(false)}
        >
          <button
            className="editable__button editable__button--ok"
            onClick={() => {
              setActiveButton(!activeButton);
              setInputValue(inputValue);
              setEditValue(inputValue);
            }}
          >
            <img
              className="button__ok--image"
              src="./check__icon.svg"
              alt="check pic"
            />
          </button>
          <button
            className="editable__button editable__button--cancel"
            onClick={() => {
              setActiveButton(!activeButton);
              setInputValue(editValue);
            }}
          >
            <img
              className="button__cancel--image"
              src="./cancel__icon.svg"
              alt="check pic"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default EditableInput;

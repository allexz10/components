import React, { useState } from 'react';
import './Accordion.scss';

type Props = {
  title: string;
  text: string;
};

const Accordion: React.FC<Props> = ({ title, text }) => {
  const [active, setActive] = useState(false);

  const toggle = () => (active ? setActive(false) : setActive(true));

  return (
    <>
      <div
        className={active ? 'title__wrapper active' : 'title__wrapper'}
        onClick={() => toggle()}
      >
        <div className="title" key={title}>
          {title}
        </div>
        <span className={active ? 'arrow active' : 'arrow'}>
          {active ? '-' : '+'}
        </span>
      </div>
      <div className="text__wrapper">
        <div className={active ? 'show text' : 'text '} key={text}>
          {text}
        </div>
      </div>
    </>
  );
};

export default Accordion;

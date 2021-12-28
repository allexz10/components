import React, { useState } from 'react';
import tabsData from '../../data/TabsData';
import './Tabs.scss';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const clickHandle = (index: number) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="tabs_wrapper">
        {tabsData.map((item, index) => (
          <div
            className={activeTab === index ? 'tabs active' : 'tabs'}
            onClick={() => clickHandle(index)}
            key={item.id}
          >
            {item.title}
          </div>
        ))}
        <div className="tabs disabled">Contact</div>
      </div>
      {tabsData.map((item, index) => (
        <div className="tabs__text" key={item.id}>
          {activeTab === index ? item.text : ''}
        </div>
      ))}
    </>
  );
};

export default Tabs;

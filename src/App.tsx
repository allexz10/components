import './App.scss';
import Accordion from './components/Accordion/Accordion';
import Tabs from './components/Tabs/Tabs';
import Tooltip from './components/Tooltip/Tooltip';
import accordionData from './data/AccordionData';
import Rating from './components/Rating/Rating';
import ToggleButton from './components/ToggleButton/ToggleButton';
import Switch from './components/Switch/Switch';
import EditableInput from './components/EditableInput/EditableInput';
import Dropdown from './components/Dropdown/Dropdown';
import Carousel from './components/Carousel/Carousel';

const App = () => (
  <div className="container">
    <div className="accordion__section">
      {accordionData.map(({ title, text, id }) => (
        <Accordion title={title} text={text} key={id} />
      ))}
    </div>
    <div className="tooltip__section">
      <Tooltip />
    </div>
    <div className="tabs__section">
      <Tabs />
    </div>
    <div className="rating__section">
      <h3 className="rating__title">Rating</h3>
      <Rating />
    </div>
    <div className="toggle__section">
      <ToggleButton />
    </div>
    <div className="switch__section">
      <h3 className="switch__title">Switch</h3>
      <Switch />
    </div>
    <div className="editable__section">
      <EditableInput />
    </div>
    <div className="dropdown__section">
      <Dropdown />
    </div>
    <div className="carousel__section">
      <Carousel />
    </div>
  </div>
);

export default App;

import  { useState } from 'react';
import './toggleSwitch.css';

const ToggleSwitch = () => {
  const [active, setActive] = useState('IT & Development');

  const handleToggle = (option) => {
    setActive(option);
  };

  return (
    <div className="toggle-switch">
      <div
        className={`toggle-option ${active === 'IT & Development' ? 'active it-development' : ''}`}
        onClick={() => handleToggle('IT & Development')}
      >
        IT & Development
      </div>
      <div
        className={`toggle-option ${active === 'Design and Creative' ? 'active design-and-creative' : ''}`}
        onClick={() => handleToggle('Design and Creative')}
      >
        Design and Creative
      </div>
    </div>
  );
};

export default ToggleSwitch;

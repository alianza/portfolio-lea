import Sun from '../svg/sun';
import Moon from '../svg/moon';
import React from 'react';

const DarkModeButton = ({ onButtonClick, darkTheme, className }) => {
  return (
    <button
      className={`drop-shadow-xl transition-transform hover:scale-110 active:scale-95 ${className ? className : ''}`}
      onClick={() => onButtonClick()}
      title="Toggle dark mode"
    >
      {darkTheme ? <Sun /> : <Moon />}
    </button>
  );
};

export default DarkModeButton;

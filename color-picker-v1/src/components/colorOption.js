// This component displays a single color option as a clickable square. It receives the color value and a function to handle the click event as props.

import React from 'react';

const ColorOption = ({ color, onClick }) => {
  return (
    <div
      onClick={() => onClick(color)}
      style={{
        backgroundColor: color,
        width: '50px',
        height: '50px',
        display: 'inline-block',
        cursor: 'pointer',
        margin: '5px',
      }}
    />
  );
};

export default ColorOption;

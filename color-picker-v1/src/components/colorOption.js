// This component displays a single color option as a clickable square. It receives the color value and a function to handle the click event as props.

import React from 'react';

const ColorOption = ({ color, onClick }) => {
  return (
    <div
      onClick={() => onClick(color)}
      style={{
        backgroundColor: color,
        width: '60px',
        height: '60px',
        display: 'inline-block',
        cursor: 'pointer',
        margin: '5px',
        borderRadius: '50px',
        justifyContent:'center',
        alignContent:'center',
      }}
    />
  );
};

export default ColorOption;

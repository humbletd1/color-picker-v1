// This component displays a list of ColorOption components. It receives an array of color values and the click handler function as props.

import React from 'react';
import ColorOption from './colorOption';

const ColorList = ({ colors, onColorClick }) => {
  return (
    <div>
      {colors.map((color, index) => (
        <ColorOption key={index} color={color} onClick={onColorClick} />
      ))}
    </div>
  );
};

export default ColorList;

// This is the main component of your application. It maintains the state of the selected background color and renders the ColorList component, passing the necessary props.

import React, { useState } from 'react';
import './App.css';
import ColorList from './components/ColorList';

const App = () => {
  const [selectedColor, setSelectedColor] = useState('white');

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

  return (
    <div className="App" style={{ backgroundColor: selectedColor, transition: 'background-color 0.5s' }}>
      <h1>Color Picker</h1>
      <ColorList colors={colors} onColorClick={handleColorClick} />
    </div>
  );
};

export default App;

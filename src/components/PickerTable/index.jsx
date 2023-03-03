import React from 'react';

import './index.css';

import Colors from './colors.json';

const PickerTable = ({ changeColor }) => {
  const colorsComponents = Colors.map((color) => (
    <button
      key={`color-code-${color}`}
      style={{ backgroundColor: color }}
      className="color-picker-button"
      onClick={() => changeColor(color)} />
  ));

  return (
    <div className="color-picker-buttons-wrapper">
      {colorsComponents}
    </div>
  );
};

export default PickerTable;

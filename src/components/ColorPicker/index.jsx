import React, { useEffect, useState } from 'react';
import { validateColor } from '../../utils/colors';
import PickerTable from '../PickerTable';

import PreviewArea from '../Preview';

const ColorPicker = () => {
  const [colorInput, setColorInput] = useState('#fffffff');
  const [color, setColor] = useState('#fffffff');
  const [message, setMessage] = useState();

  useEffect(() => {
    if (colorInput !== color) {
      changeColor(colorInput);
    }
  }, [color, colorInput]);

  const changeColor = (input) => {
    const valid = validateColor(input);

    if (valid) {
      setColor(colorInput);
      setMessage(null);
    } else {
      setMessage('Selected color is not valid');
    }
  };

  return (
    <>
      <PickerTable
        changeColor={setColorInput}
      />
      <input
        type="text"
        value={colorInput}
        onChange={({ target: { value } }) => setColorInput(value)}
      />
      {message && <p>{message}</p>}
      <PreviewArea
        color={color}
      />
    </>
  );
}

export default ColorPicker;

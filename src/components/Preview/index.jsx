import React from 'react';

import './index.css';

const PreviewArea = ({ color }) => (
  <div
    className="preview-area"
    style={{
      backgroundColor: color,
    }}
  >
    {color && <p className="preview-area-color-code">Color code: {color}</p>}
  </div>
); 

export default PreviewArea;

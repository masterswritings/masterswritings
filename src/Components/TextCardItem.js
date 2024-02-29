// src/Components/TextCardItem.js

import React from 'react';

function TextCardItem({ text, description }) {
  return (
    <div className='text-card-item'>
      <div className='text-card-item-info'>
        <h5>{text}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TextCardItem;

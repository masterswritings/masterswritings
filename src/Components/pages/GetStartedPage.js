// src/Components/pages/GetStartedPage.js

import React from 'react';
import '../../App.css';
import TextCards from '../TextCards'; // Import TextCards instead of Cards

function GetStartedPage() {
  return (
    <div className='get-started-page'>
      <TextCards /> {/* Use TextCards here */}
    </div>
  );
}

export default GetStartedPage;

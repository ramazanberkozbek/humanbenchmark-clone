import React from 'react';
import './style.css';

function Advertisement({ imageSource }) {
  return (
    <div className='ad'>
      <img src={imageSource} alt="Advertisement" />
      <div className="ad-controls">
        <button className="ad-control-btn">i</button>
        <button className="ad-control-btn">×</button>
      </div>      
    </div>
  );
}

export default Advertisement;
import React from 'react';
import './styles/style.css'
import { FaBoltLightning } from 'react-icons/fa6';
import { PiGridFour } from "react-icons/pi";

import ad1 from './public/images/ad1.png';

function App() {
  return(
    <div>
      <header>
        <div className='header-left'>
          <div><FaBoltLightning /> HUMAN BENCHMARK</div>
          <div className='dashboard'>DASHBOARD</div>
        </div>
        <div className='header-right'>
          <div className='signUp'>SIGN UP</div>
          <div className='logIn'>LOGIN</div>
        </div>
      </header>

      <div className='blue-section'>
        <div className="lightning-icon"><FaBoltLightning /></div>
        <h1 className="main-title">Human Benchmark</h1>
        <p className="subtitle">Measure your abilities with brain games and cognitive tests.</p>
        <button className="get-started-button">Get Started</button>
      </div>

      <div className='ad'>
        <img src={ad1} alt="Advertisement" />
        <div className="ad-controls">
          <button className="ad-control-btn">i</button>
          <button className="ad-control-btn">×</button>
        </div>      
      </div>

      <div className='test-section'>
        {/* Reaction Time */}
        <div className="test-card">
          <div className="card-icon reaction-icon"><FaBoltLightning /></div>
          <h2 className="card-title">Reaction Time</h2>
          <p className="card-description">Test your visual reflexes.</p>
       </div>

        {/* Sequence Memory */}
        <div className='test-card'>
          <div className="card-icon reaction-icon"><PiGridFour /></div>
          <h2 className="card-title">Sequence Memory</h2>
          <p className="card-description">Remember an increasingly long pattern of button presses.</p>
        </div>

      </div>
    </div>
  )
}

export default App;
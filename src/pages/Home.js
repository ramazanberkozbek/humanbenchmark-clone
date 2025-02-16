import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/style.css';
import Header from '../components/Header/Header';

import { FaBoltLightning, FaBookBookmark} from 'react-icons/fa6';
import { PiGridFour, PiSquaresFourThin } from "react-icons/pi";
import { AiOutlineAim } from "react-icons/ai";
import { TbNumber123 } from "react-icons/tb";
import { SiSurveymonkey } from "react-icons/si";
import { BiSolidKeyboard } from "react-icons/bi";

import ad1 from '../public/images/ad1.png';

function Home() {
  return(
    <div>
      <Header />
      <Link to='/games/reaction'>
        <div className='blue-section'>
          <div className="lightning-icon"><FaBoltLightning /></div>
          <h1 className="main-title">Human Benchmark</h1>
          <p className="subtitle">Measure your abilities with brain games and cognitive tests.</p>
            <button className="get-started-button">Get Started</button>
        </div>
      </Link>
      <div className='ad'>
        <img src={ad1} alt="Advertisement" />
        <div className="ad-controls">
          <button className="ad-control-btn">i</button>
          <button className="ad-control-btn">×</button>
        </div>      
      </div>

      <div className='test-section'>
        {/* Reaction Time */}
        <Link to='/games/reaction'>
          <div className="test-card">
            <div className="card-icon reaction-icon"><FaBoltLightning /></div>
            <h2 className="card-title">Reaction Time</h2>
            <p className="card-description">Test your visual reflexes.</p>
          </div>
        </Link>

        {/* Sequence Memory */}
        <Link to='/games/sequence'>
          <div className='test-card'>
            <div className="card-icon reaction-icon"><PiGridFour /></div>
            <h2 className="card-title">Sequence Memory</h2>
            <p className="card-description">Remember an increasingly long pattern of button presses.</p>
          </div>
        </Link>

        {/* Aim Trainer */}
        <div className='test-card'>
          <div className="card-icon reaction-icon"><AiOutlineAim /></div>
          <h2 className="card-title">Aim Trainer</h2>
          <p className="card-description">How quickly can you hit all the targets?</p>
        </div>

        {/* Number Memory */}
        <div className='test-card'>
          <div className="card-icon reaction-icon"><TbNumber123 /></div>
          <h2 className="card-title">Number Memory</h2>
          <p className="card-description">Remember the longest number you can.</p>
        </div>

        {/* Verbal Memory */}
        <div className='test-card'>
          <div className="card-icon reaction-icon"><FaBookBookmark /></div>
          <h2 className="card-title">Verbal Memory</h2>
          <p className="card-description">Keep as many words in short term memory as possible.</p>
        </div>
        
        {/* Chimp Test */}
        <div className='test-card'>
          <div className="card-icon reaction-icon"><SiSurveymonkey /></div>
          <h2 className="card-title">Chimp Test</h2>
          <p className="card-description">Are you smarter than a chimpanzee?</p>
        </div>

        {/* Visual Memory */}
        <div className='test-card'>
          <div className="card-icon reaction-icon"><PiSquaresFourThin /></div>
          <h2 className="card-title">Visual Memory</h2>
          <p className="card-description">Remember an increasingly large board of squares.</p>
        </div>

        {/* Typing Test */}
        <div className='test-card'>
          <div className="card-icon reaction-icon"><BiSolidKeyboard /></div>
          <h2 className="card-title">Typing Test</h2>
          <p className="card-description">How many words per minute can you type?</p>
        </div>
      </div>

      <footer>
        <div className='footer-left'>
          <p>Copyright 2007</p>
        </div>
        <div className='footer-right'>
          <a href='/'>Contact</a>
          <a href='/'>Privacy Policy</a>
          <a href='/'>Licensing</a>
        </div>
      </footer>
    </div>
  )
}

export default Home;
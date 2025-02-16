//Kullanıcı ekrana tıkladığında, 1 ile 7 saniye arasında rastgele bir süre için geri sayım başlar.
//Bu süre sona erdiğinde, ekran kırmızıdan yeşile döner.
//Kullanıcının görevi, ekran yeşile döner dönmez mümkün olduğunca hızlı bir şekilde tekrar ekrana tıklamaktır.
//Kullanıcı tıkladığında, tıklama süresi (örneğin, 260 ms) ekrana yazdırılır.

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header/Header';
import './ReactionGame.css';
import Advertisement from '../../../components/Advertisement/Advertisement';

import { FaBoltLightning } from 'react-icons/fa6';
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa";
import ad2 from '../../../public/images/ad2.png'; 
import reactionTimeStats from '../../../public/images/static.png'; 

const GameStates = {
  START: 'start',                  // Initial state showing instructions
  WAIT_FOR_GREEN: 'waitForGreen',  // Red screen waiting
  CLICK_NOW: 'clickNow',           // Green screen 
  SHOW_SCORE: 'showScore'          // Results
};

function ReactionGame() {
  const [gameState, setGameState] = useState(GameStates.START);
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const [error, setError] = useState(null);
  const [averageReactionTime, setAverageReactionTime] = useState(0); // Average
  const [reactionTimes, setReactionTimes] = useState([]); // Tıklama sürelerini kaydet Array
  
  const calculateAverage = (times) => {
    if (times.length === 0) return; // Return default if no times yet
    const sum = times.reduce((a, b) => a + b, 0);
    return Math.round(sum / times.length);
  };

  useEffect(() => {
    let timeoutId;

    if (gameState === GameStates.WAIT_FOR_GREEN) {
      const randomDelay = Math.random() * 4000 + 1000;
      timeoutId = setTimeout(() => {
        setStartTime(Date.now());
        setGameState(GameStates.CLICK_NOW);
      }, randomDelay);
    }

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [gameState]); 

  const handleClick = () => {
    switch (gameState) {

      case GameStates.START:
        setError(null);
        setGameState(GameStates.WAIT_FOR_GREEN);
        break;

      case GameStates.WAIT_FOR_GREEN:
        setError("Too early! Click when the screen turns green.");
        setGameState(GameStates.START);
        break;
  
      case GameStates.CLICK_NOW:
        const endTime = Date.now();
        const newReactionTime = endTime - startTime;

        const updatedTimes = [...reactionTimes, newReactionTime];
        setReactionTime(newReactionTime)

        const newAverage = calculateAverage(updatedTimes);
        setReactionTimes([...reactionTimes, newReactionTime]);
        setAverageReactionTime(newAverage);
        setGameState(GameStates.SHOW_SCORE);
        break;
      
      case GameStates.SHOW_SCORE:
        setGameState(GameStates.START);
        setStartTime(null);
        setReactionTime(null);
        setError(null);
        break;

      default:
        console.log("reactionTime", reactionTime);
        break;
    }
  };

  const renderContent = () => {
    switch(gameState) {
      case GameStates.START:
        if (error) {
          return (
            <>
              <AiOutlineInfoCircle className="game-icon" />
              <h1 className='error-message'>{error}</h1>
            </>
          )
        }
        return (
          <>
            <FaBoltLightning className="game-icon"/>
            <h1 className='main-title'>Reaction Time Test</h1>
            <p className='subtitle'>When the red box turns green, click as quickly as you can.</p>
            <p className='subtitle'>Click anywhere to start.</p>
          </>
        );
        
      
      case GameStates.WAIT_FOR_GREEN:
        return (
          <>
            <BsThreeDots className="game-icon"/> 
            <h1 className='main-title'> Wait for green...</h1>
          </>
        );
      case GameStates.CLICK_NOW:
        return (
        <>
          <BsThreeDots className="game-icon" /> 
          <h1 className='main-title'>CLICK!</h1>
        </>
      );
      case GameStates.SHOW_SCORE:
        return (
          <>
            <FaRegClock className="game-icon" />
            <h1 className='main-title'>{reactionTime}ms</h1>
            <p className='subtitle'>Click anywhere to try again</p>
          </>
        );
      
      default:
        return null;     
    }
  };

  return (
    <>
      <Header />
      <div 
        className='reaction-container start-area' 
        onClick={handleClick}
        data-game-state={gameState}
      >
        {renderContent()}
      </div>
      <Advertisement imageSource={ad2} />
      <div className="statistics-container">
        <div className="statistics-section">
          <h1 className="statistics-title">Average Statistics</h1>
          <img 
            src={reactionTimeStats} 
            alt='Reaction time Average Stats' 
            className='stats-image'
          />
        </div>
        <div className="statistics-section">
          <h1 className="statistics-title">Your Average</h1>
          <p className='average-reaction-time'>{averageReactionTime}ms</p>
          <p className='reaction-times'>
            History: {reactionTimes.join('ms, ')}ms
          </p>
        </div>
      </div>
    </>
  );
}

export default ReactionGame;
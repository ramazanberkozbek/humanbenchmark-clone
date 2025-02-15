import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import './ReactionGame.css';
import { FaBoltLightning } from 'react-icons/fa6';

const GameStates = {
  START: 'start',        // Initial state showing instructions
  WAIT_FOR_GREEN: 'waitForGreen',  // Red screen waiting
  CLICK_NOW: 'clickNow',    // Green screen 
  SHOW_SCORE: 'showScore'   // Results
};

function ReactionGame() {
  const [gameState, setGameState] = useState(GameStates.START);
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    switch (gameState) {

      case GameStates.START:
        setError(null);
        setGameState(GameStates.WAIT_FOR_GREEN);
        const randomDelay = Math.random() * 4000 + 1000;
        setTimeout(() => {
          setStartTime(Date.now());
          setGameState(GameStates.CLICK_NOW);
        }, randomDelay);
        break;

      case GameStates.WAIT_FOR_GREEN:
        setError("Too early! Click when the screen turns green.");
        setGameState(GameStates.START);
        break;
  
      case GameStates.CLICK_NOW:
        const endTime = Date.now();
        setReactionTime(endTime - startTime)
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
        return (
          <>
            <div className='lighting-icon'><FaBoltLightning /></div>
            <h1 className='main-title'>Reaction Time Test</h1>
            {error ? (
              <p className='error-message'>{error}</p>
            ) : (
              <>
                <p className='subtitle'>When the red box turns green, click as quickly as you can.</p>
                <p className='subtitle'>Click anywhere to start.</p>
              </>
            )}
            </>
          );
      
      case GameStates.WAIT_FOR_GREEN:
        return <h1 className='main-title'>Wait for green...</h1>
        
      case GameStates.CLICK_NOW:
        return <h1 className='main-title'>CLICK!</h1>
      
      case GameStates.SHOW_SCORE:
        return (
          <>
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
    </>
  );
}

export default ReactionGame;
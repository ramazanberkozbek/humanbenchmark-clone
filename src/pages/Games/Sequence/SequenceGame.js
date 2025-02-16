import React, { useState, useEffect, useCallback } from "react";
import "./SequenceGame.css";
import Header from "../../../components/Header/Header";
import GameUi from "../../../components/GameUi/GameUi";
import GameBoard from "./GameBoard";
import { PiGridFour } from "react-icons/pi";

const GameStates = {
  START_SCREEN: "startScreen",
  WAIT_FOR_SEQUENCE: "waitForSequence",
  DISPLAY_SEQUENCE: "displaySequence",
  USER_INPUT: "userInput",
  RESULT: "result",
};


function SequenceGame() {
  const [level, setLevel] = useState(1);
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [gameState, setGameState] = useState(GameStates.START_SCREEN); // 'start', 'displaySequence', 'userInput', 'result'



  const startGame = () => {
    setLevel(1);
    setUserSequence([]);
    const newSeq = [(Math.floor(Math.random() * 9))];
    setSequence(newSeq);
    setGameState(GameStates.DISPLAY_SEQUENCE); // Diziyi gösterme aşamasına geç
    setTimeout(() => {
      showSequence(newSeq);
    }, 500)
  };

  // SEQUENCE GENERATE
  const generateSequence = useCallback(() => {
    const newSequence = [...sequence, Math.floor(Math.random() * 9)];
    setSequence(newSequence);
    return newSequence;
  }, [sequence]);

  const showSequence = (seq) => {
    seq.forEach((squareIndex, idx) => {
      setTimeout(() => {
        const square = document.getElementById(`square-${squareIndex}`);
        if (square) { // Hata tolerans
          square.classList.add('active');
          setTimeout(() => {
            square.classList.remove('active');
            if (idx === seq.length -1) {
              setGameState(GameStates.USER_INPUT);
            }
          }, 500);
        }
      }, idx * 1000);       
    });
  };

  const handleSquareClick = (e) => {
    if (gameState !== GameStates.USER_INPUT) return; // SADECE USER_INPUT açıkken girdi alınır
    const square = e.currentTarget;

    const idParts = square.id.split('-');
    const squareIndex = parseInt(idParts[1], 10);  
    
    // Anlık kontrol: Doğru kareye mi tıklandı?
    if (squareIndex !== sequence[userSequence.length]) {
      setGameState(GameStates.RESULT);
      return;
    }

    setUserSequence(prevSequence => [...prevSequence, squareIndex]);
    
    square.classList.add("active");  
    setTimeout(() => {
      square.classList.remove("active");
    }, 100);
  }

  // userSequence state'i her değiştiğinde, input tamamlandığında (userSequence uzunluğu sequence ile eşit olduğunda) kontrol et
  useEffect(() => {
    if (sequence.length > 0 && userSequence.length === sequence.length) {
        setLevel((prevLevel) => prevLevel + 1);
        setUserSequence([]);
        const newSeq = generateSequence();
        setGameState(GameStates.DISPLAY_SEQUENCE);
        setTimeout(() => {
          showSequence(newSeq);
        }, 500); 
    }
  }, [userSequence, sequence, generateSequence, setGameState]);

  const renderResultScreen = () => (
    <GameUi
      IconComponent={PiGridFour}
      gameTitle={`Level ${level} Failed!`}
      description="Oops! Wrong sequence. Try to memorize the pattern better!"
      buttonLabel="Try Again"
      onButtonClick={startGame}
    />
  );
  
  const renderGameScreen = () => (
    <>
      <h1>Level: {level}</h1>
      <GameBoard onSquareClick={handleSquareClick} />
    </>
  );
  
  const renderStartScreen = () => (
    <GameUi
      IconComponent={PiGridFour}
      gameTitle="Sequence Game"
      description="Memorize the pattern"
      buttonLabel="Get Started"
      onButtonClick={startGame}
    />
  );

  const renderContent = () => {
    switch (gameState) {
      case GameStates.RESULT:
        return renderResultScreen();

      case GameStates.START_SCREEN:
        return renderStartScreen();
      
      default:
        return renderGameScreen();
    }
  };

  return (
    <>
      <Header />
      <div className="sequence-game-wrapper">
        {renderContent()}
      </div>
    </>
  );
}

export default SequenceGame;
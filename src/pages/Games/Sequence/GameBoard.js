import React from 'react';
import './SequenceGame.css';

function GameBoard({ onSquareClick }) {

  return (
    <div className="game-board">
        {/* 9 kare ayrı sınıflar */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div
                key={index}
                id={`square-${index}`}
                className="square"
                onClick={onSquareClick}
            ></div>
        ))}
    </div>
  );
}   

export default GameBoard;
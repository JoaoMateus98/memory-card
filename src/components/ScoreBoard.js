import React from "react";
import "../styles/ScoreBoard.css";

const ScoreBoard = (props) => {
  return (
    <header className="score-board-container">
      <h2 className="current-score">
        Current Score: <span>{props.currentScore}</span>
      </h2>
      <h2 className="high-score">High Score: {props.highScore}</h2>
    </header>
  );
};

export default ScoreBoard;

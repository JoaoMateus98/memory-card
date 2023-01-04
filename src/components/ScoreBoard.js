import React from "react";
import "../styles/ScoreBoard.css";

const ScoreBoard = (props) => {
  return (
    <div className="score-board-container">
      <div className="current-score">Current Score: {props.currentScore}</div>
      <div className="high-score">High Score: {props.highScore}</div>
    </div>
  );
};

export default ScoreBoard;

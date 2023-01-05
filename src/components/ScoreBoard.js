import React from "react";
import "../styles/ScoreBoard.css";

const ScoreBoard = (props) => {
  return (
    <header className="score-board-container">
      <h1 className="title">Memory Game</h1>
      <section className="scores">
        <h2 className="current-score">
          Score: <span>{props.currentScore}</span>
        </h2>
        <h2 className="high-score">High Score: {props.highScore}</h2>
      </section>
    </header>
  );
};

export default ScoreBoard;

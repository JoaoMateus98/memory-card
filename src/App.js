import React, { useDebugValue, useEffect, useState } from "react";
import ScoreBoard from "./components/ScoreBoard";
import CardContainer from "./components/CardContainer";
import "./styles/App.css";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [reset, setReset] = useState(false); // trigers if you lose or win
  const winningScore = 3;

  const incrementScore = () => {
    setCurrentScore(currentScore + 1);
  };

  // winning function
  useEffect(() => {
    if (currentScore === winningScore) {
      alert("you win");
      setReset(true);
    }
  }, [currentScore]);

  // reset game
  useEffect(() => {
    if (reset) {
      // check for new high score
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }

      setCurrentScore(0);
      setReset(false);
    }
  }, [reset]);

  return (
    <div className="main-app-container">
      <ScoreBoard currentScore={currentScore} highScore={highScore} />
      <CardContainer
        incrementScore={incrementScore}
        reset={reset}
        setReset={setReset}
      />
    </div>
  );
};

export default App;

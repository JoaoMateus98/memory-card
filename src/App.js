import React, { useEffect, useState } from "react";
import ScoreBoard from "./components/ScoreBoard";
import CardContainer from "./components/CardContainer";
import "./styles/App.css";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // trigers if you lose or win
  const [reset, setReset] = useState(false);

  const incrementScore = () => {
    setCurrentScore(currentScore + 1);
  };

  // reset game
  useEffect(() => {
    if (reset) {
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

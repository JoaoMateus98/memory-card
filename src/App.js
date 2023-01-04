import React, { useState } from "react";
import ScoreBoard from "./components/ScoreBoard";
import CardContainer from "./components/CardContainer";
import "./styles/App.css";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="main-app-container">
      <ScoreBoard currentScore={currentScore} highScore={highScore} />
      <CardContainer />
    </div>
  );
};

export default App;

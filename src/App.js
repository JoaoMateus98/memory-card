import React from "react";
import ScoreBoard from "./components/ScoreBoard";
import CardContainer from "./components/CardContainer";
import "./styles/App.css";

const App = () => {
  return (
    <div className="main-app-container">
      <ScoreBoard />
      <CardContainer />
    </div>
  );
};

export default App;

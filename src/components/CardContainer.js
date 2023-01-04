import React from "react";
import "../styles/CardContainer.css";

const CardContainer = (props) => {
  return (
    <div className="card-container">
      {/* delete this */}
      <button onClick={props.incrementScore}>Increment</button>
    </div>
  );
};

export default CardContainer;

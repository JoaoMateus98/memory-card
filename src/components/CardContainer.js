import React, { useState } from "react";
import Card from "./Card";
import "../styles/CardContainer.css";

const CardContainer = (props) => {
  const [cardList, setCardList] = useState([
    { key: "python" },
    { key: "javascript" },
    { key: "basic" },
  ]);

  return (
    <div className="card-container">
      {cardList.map((card) => {
        return <Card name={card.key} />;
      })}
    </div>
  );
};

export default CardContainer;

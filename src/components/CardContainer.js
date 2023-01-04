import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/CardContainer.css";

const CardContainer = (props) => {
  const [cardList, setCardList] = useState({
    array: [{ name: "python" }, { name: "javascript" }, { name: "basic" }],
  });

  // Fisher–Yates shuffle from stack overflow
  const shuffleCards = () => {
    const array = [...cardList.array];

    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    setCardList({ array: array });
  };

  // shuffle cards in the beginnig
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="card-container">
      {cardList.array.map((card) => {
        return <Card key={card.name} name={card.name} />;
      })}
    </div>
  );
};

export default CardContainer;

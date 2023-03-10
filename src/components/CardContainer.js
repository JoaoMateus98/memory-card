import React, { useEffect, useState } from "react";
import Card from "./Card";
import pythonImage from "../images/python.png";
import javascriptImage from "../images/javascript.png";
import cImage from "../images/c.png";
import javaImage from "../images/java.png";
import rustImage from "../images/rust.png";
import swiftImage from "../images/swift.png";
import "../styles/CardContainer.css";

const CardContainer = (props) => {
  const [cardList, setCardList] = useState({
    array: [
      { image: pythonImage, name: "Python" },
      { image: javascriptImage, name: "Javascript" },
      { image: cImage, name: "C++" },
      { image: javaImage, name: "Java" },
      { image: rustImage, name: "Rust" },
      { image: swiftImage, name: "Swift" },
    ],
  });

  // Fisher–Yates shuffle from stack overflow
  const shuffleCards = () => {
    const array = [...cardList.array];

    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
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
    <main className="card-container">
      {cardList.array.map((card) => {
        return (
          <Card
            key={card.name}
            image={card.image}
            name={card.name}
            shuffleCards={shuffleCards}
            incrementScore={props.incrementScore}
            reset={props.reset}
            setReset={props.setReset}
          />
        );
      })}
    </main>
  );
};

export default CardContainer;

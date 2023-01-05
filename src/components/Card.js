import React, { useState } from "react";

const Card = (props) => {
  const [wasClicked, setWasClicked] = useState(false);

  const handleClick = () => {
    // clicked twice so you lose
    if (wasClicked) {
      props.setReset(true);
    }

    setWasClicked(true);
    props.shuffleCards();
  };

  return (
    <img
      className="card"
      src={props.image}
      alt={props.name}
      onClick={handleClick}
    />
  );
};

export default Card;

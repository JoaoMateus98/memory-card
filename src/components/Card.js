import React, { useEffect, useState } from "react";

const Card = (props) => {
  const [wasClicked, setWasClicked] = useState(false);

  const handleClick = () => {
    // clicked twice so you lose
    if (wasClicked) {
      props.setReset(true);
      return;
    }

    props.incrementScore();
    setWasClicked(true);
    props.shuffleCards();
  };

  // reset all cards wasCliked
  useEffect(() => {
    if (props.reset) {
      setWasClicked(false);
    }
  }, [props.reset]);

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

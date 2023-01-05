import React, { useEffect, useState } from "react";

const Card = (props) => {
  const [wasClicked, setWasClicked] = useState(false);

  const handleClick = () => {
    // clicked twice so you lose
    if (wasClicked) {
      alert(`${props.name} was already selected!`);
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
    <section className="card">
      <img
        className="card-image"
        src={props.image}
        alt={props.name}
        onClick={handleClick}
      />
      <h3 className="card-name">{props.name}</h3>
    </section>
  );
};

export default Card;

import React from "react";

const Card = (props) => {
  const handleClick = () => {
    console.log("clicked", props.name);
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

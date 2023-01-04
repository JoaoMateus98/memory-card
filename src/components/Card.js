import React from "react";

const Card = (props) => {
  const handleClick = () => {
    console.log("clicked", props.name);
  };

  return (
    <img
      className="card"
      src={props.image}
      height={"100px"}
      width="100px"
      onClick={handleClick}
    />
  );
};

export default Card;

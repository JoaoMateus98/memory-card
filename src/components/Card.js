import React from "react";

const Card = (props) => {
  const handleClick = () => {
    console.log("clicked", props.name);
  };

  return (
    <div className="card" onClick={handleClick}>
      {props.name}
    </div>
  );
};

export default Card;

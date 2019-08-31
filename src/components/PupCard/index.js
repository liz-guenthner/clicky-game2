import React from "react";
import "./style.css";

function PupCard(props) {
  return (
    <div role="img" aria-label="click item" className="click-item">
      <img alt="puppy pic" src={props.image} onClick={props.handleIncrement}/>
    </div>
  );
}

export default PupCard;
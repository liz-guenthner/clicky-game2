import React from "react";
import "./style.css";

function PupCard(props) {
  return (
    <div role="img" aria-label="click item" className="click-item">
      <img alt={props.name} src={props.image} onClick={props.shufflePupPics} />
    </div>
  );
}

export default PupCard;
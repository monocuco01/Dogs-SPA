import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div>
      <div className="carta">
        {props.url ? <img src={props.url} alt={props.name} /> : null}
        <p>name: {props.name}.</p>
        <p>temperament: {props.temperament}</p>
      </div>
    </div>
  );
};

export default Card;

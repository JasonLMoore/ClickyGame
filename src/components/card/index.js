import React from "react";
import "./card.css";


function SithCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} alt={props.name} />
      </div>
      
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default SithCard;
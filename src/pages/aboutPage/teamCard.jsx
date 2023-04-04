import React from "react";
import x from "../../images/people/people1.jpg";

function TeamCard({ imageSrc, name, pos, mail }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageSrc} className="people-i"></img>
        </div>
        <div className="flip-card-back">
          <h1>{name}</h1>
          <p>{pos}</p>
          <p>We love that guy</p>
          <p>{mail}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;

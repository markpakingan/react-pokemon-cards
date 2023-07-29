// PokemonCard.js File


import React, { useState } from "react";
import "./PokemonCard.css";
import useFlip from "./hooks";


/* Renders a single pokemon card. */
function PokemonCard({ front, back, name, stats }) {
  // const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);

  const [isFacingUp, toggleIsFacingUp] = useFlip();
  
  return (
    <div className="PokemonCard Card"
    onClick={toggleIsFacingUp}>
      {isFacingUp ? (
        <div className="PokemonCard-front">
          <img src={front} alt={`{name} front`} />
          <div>
            <p className="PokemonCard-name">{name}</p>
            <ul className="PokemonCard-stats">
              {stats.map(stat => (
                <li key={stat.name}>
                  <em>{stat.name}</em>: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="PokemonCard-back">
          <img src={back} alt={`{name} back`} />
        </div>
      )}
    </div>
  );
}

export default PokemonCard;

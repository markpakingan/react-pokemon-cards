// PlayingCard.js file

import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./useAxios";

import { v4 as uuidv4 } from 'uuid';

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {


  const URL = "https://deckofcardsapi.com/api/deck/new/draw/";
  const [addCard, getData] = useAxios(URL,[]);

  // const [addCard, setAddCard] = useAxios(URL, []);


  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={getData}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {addCard.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;

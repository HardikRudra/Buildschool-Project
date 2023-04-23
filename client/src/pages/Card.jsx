import React, { useState } from "react";

function Card({ id, handleClick }) {
  const [backgroundColor, setBackgroundColor] = useState("white");

  function handleClickCard() {
    setBackgroundColor("red");
    handleClick(id);
  }

  return (
    <div
      className="card"
      style={{ backgroundColor }}
      onClick={handleClickCard}
    >
      Card {id}
    </div>
  );
}

function CardContainer() {
  const [selectedCard, setSelectedCard] = useState(null);

  function handleClickCard(id) {
    setSelectedCard(id);
  }

  const cards = [1, 2, 3, 4];

  return (
    <div>
      {cards.map((card) => (
        <Card
          key={card}
          id={card}
          handleClick={handleClickCard}
          isSelected={selectedCard === card}
        />
      ))}
    </div>
  );
}
export default Card;
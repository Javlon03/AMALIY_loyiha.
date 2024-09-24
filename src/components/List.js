import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../redux/boardSlice";
import Card from "./Card";

const List = ({ list }) => {
  const dispatch = useDispatch();
  const [cardText, setCardText] = useState("");

  const handleAddCard = () => {
    if (cardText.trim()) {
      dispatch(addCard({ listId: list.id, text: cardText }));
      setCardText("");
    }
  };

  return (
    <div className="list">
      <h3>{list.title}</h3>
      {list.cards.map((card) => (
        <Card key={card.id} card={card} listId={list.id} />
      ))}
      <div className="add-card">
        <input
          type="text"
          value={cardText}
          onChange={(e) => setCardText(e.target.value)}
          placeholder="+ Add a card"
        />
        <button onClick={handleAddCard}>Add Card</button>
      </div>
    </div>
  );
};

export default List;

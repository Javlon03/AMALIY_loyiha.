import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import CardComponent from "./CardComponent";

const ListComponent = ({ list, onAddCard, onSaveCard, onDeleteCard }) => {
  const [newCardTitle, setNewCardTitle] = useState("");

  const handleAddCard = (e) => {
    if (e.key === "Enter") {
      onAddCard(list.id, newCardTitle);
      setNewCardTitle("");
    }
  };

  return (
    <div className="list-container">
      <h2>{list.title}</h2>

      {list.cards.map((card) => (
        <CardComponent
          key={card.id}
          card={card}
          onSave={(cardId, newTitle) => onSaveCard(list.id, cardId, newTitle)}
          onDelete={(cardId) => onDeleteCard(list.id, cardId)}
        />
      ))}

      <div className="add-card-container">
        <input
          type="text"
          placeholder="Add a card"
          value={newCardTitle}
          onChange={(e) => setNewCardTitle(e.target.value)}
          onKeyDown={handleAddCard}
        />
        <FaPlus
          onClick={() => onAddCard(list.id, newCardTitle)}
          className="add-card-icon"
        />
      </div>
    </div>
  );
};

export default ListComponent;

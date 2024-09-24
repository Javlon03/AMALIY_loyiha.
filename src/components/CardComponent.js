import React, { useState } from "react";
import { FaPen, FaTrash, FaSave } from "react-icons/fa";

const CardComponent = ({ card, onSave, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(card.title);
  const [isHovered, setIsHovered] = useState(false);

  const handleSave = () => {
    if (newTitle.trim() === "") return;
    onSave(card.id, newTitle);
    setIsEditing(false);
  };

  return (
    <div
      className={`card-container ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
          />
          <div className="icon-container">
            <FaSave onClick={handleSave} className="save-icon" />
            <FaTrash
              onClick={() => onDelete(card.id)}
              className="delete-icon"
            />
          </div>
        </div>
      ) : (
        <div className="view-mode">
          <p>{card.title}</p>
          {isHovered && (
            <FaPen onClick={() => setIsEditing(true)} className="edit-icon" />
          )}
        </div>
      )}
    </div>
  );
};

export default CardComponent;

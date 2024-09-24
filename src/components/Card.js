import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { editCard, deleteCard } from "../redux/boardSlice";
import CardEdit from "./CardEdit";

const Card = ({ card, listId }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="card">
      {isEditing ? (
        <CardEdit card={card} listId={listId} setIsEditing={setIsEditing} />
      ) : (
        <div onMouseEnter={() => setIsEditing(true)}>
          <p>{card.text}</p>
          <FaEdit />
        </div>
      )}
    </div>
  );
};

export default Card;

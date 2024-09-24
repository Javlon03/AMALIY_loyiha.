import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editCard, deleteCard } from "../redux/boardSlice";

const CardEdit = ({ card, listId, setIsEditing }) => {
  const dispatch = useDispatch();
  const [newText, setNewText] = useState(card.text);

  const handleSave = () => {
    dispatch(editCard({ listId, cardId: card.id, newText }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteCard({ listId, cardId: card.id }));
  };

  return (
    <div className="card-edit">
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </div>
  );
};

export default CardEdit;

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ListComponent from "./components/ListComponent";
import "./styles.css";

const App = () => {
  const [lists, setLists] = useState([
    {
      id: 1,
      title: "First list",
      cards: [
        { id: 1, title: "First card" },
        { id: 2, title: "Second card" },
      ],
    },
    {
      id: 2,
      title: "Second list",
      cards: [
        { id: 3, title: "Card 1" },
        { id: 4, title: "Card 2" },
      ],
    },
  ]);

  const [newListTitle, setNewListTitle] = useState("");

  const addList = () => {
    if (newListTitle.trim() === "") return;
    setLists([...lists, { id: Date.now(), title: newListTitle, cards: [] }]);
    setNewListTitle("");
  };

  const addCard = (listId, cardTitle) => {
    if (cardTitle.trim() === "") return;
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              cards: [...list.cards, { id: Date.now(), title: cardTitle }],
            }
          : list
      )
    );
  };

  const handleSaveCard = (listId, cardId, newTitle) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              cards: list.cards.map((card) =>
                card.id === cardId ? { ...card, title: newTitle } : card
              ),
            }
          : list
      )
    );
  };

  const handleDeleteCard = (listId, cardId) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              cards: list.cards.filter((card) => card.id !== cardId),
            }
          : list
      )
    );
  };

  return (
    <div className="app-container">
      <h1>React Trello Clone</h1>

      <div className="lists-container">
        {lists.map((list) => (
          <ListComponent
            key={list.id}
            list={list}
            onAddCard={addCard}
            onSaveCard={handleSaveCard}
            onDeleteCard={handleDeleteCard}
          />
        ))}

        <div className="add-list-container">
          <input
            type="text"
            placeholder="+ Add a list"
            value={newListTitle}
            onChange={(e) => setNewListTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addList()}
          />
          <FaPlus onClick={addList} className="add-list-icon" />
        </div>
      </div>
    </div>
  );
};

export default App;

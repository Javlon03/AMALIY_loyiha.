import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../redux/boardSlice";
import List from "./List";

const Board = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.board.lists);
  const [listTitle, setListTitle] = useState("");

  const handleAddList = () => {
    if (listTitle.trim()) {
      dispatch(addList(listTitle));
      setListTitle("");
    }
  };

  return (
    <div className="board">
      {lists.map((list) => (
        <List key={list.id} list={list} />
      ))}
      <div className="add-list">
        <input
          type="text"
          value={listTitle}
          onChange={(e) => setListTitle(e.target.value)}
          placeholder="+ Add a list"
        />
        <button onClick={handleAddList}>Add List</button>
      </div>
    </div>
  );
};

export default Board;

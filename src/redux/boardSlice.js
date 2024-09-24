import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [
    {
      id: 1,
      title: "First list",
      cards: [
        { id: 1, text: "First card" },
        { id: 2, text: "Second card" },
      ],
    },
  ],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.lists.push({
        id: Date.now(),
        title: action.payload,
        cards: [],
      });
    },
    addCard: (state, action) => {
      const { listId, text } = action.payload;
      const list = state.lists.find((list) => list.id === listId);
      if (list) {
        list.cards.push({ id: Date.now(), text });
      }
    },
    editCard: (state, action) => {
      const { listId, cardId, newText } = action.payload;
      const list = state.lists.find((list) => list.id === listId);
      if (list) {
        const card = list.cards.find((card) => card.id === cardId);
        if (card) {
          card.text = newText;
        }
      }
    },
    deleteCard: (state, action) => {
      const { listId, cardId } = action.payload;
      const list = state.lists.find((list) => list.id === listId);
      if (list) {
        list.cards = list.cards.filter((card) => card.id !== cardId);
      }
    },
  },
});

export const { addList, addCard, editCard, deleteCard } = boardSlice.actions;
export default boardSlice.reducer;

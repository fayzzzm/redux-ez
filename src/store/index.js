import { createStore } from "redux";

const initialState = {
  name: "Mustafo",
  surname: "Faiz",
  todos: []
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_NAME":
      return { ...state, name: payload };

    case "ADD_TODO":
      return { ...state, todos: state.todos.concat(payload) };
    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);

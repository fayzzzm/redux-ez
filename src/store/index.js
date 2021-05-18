import { createStore, applyMiddleware } from "redux";
import { asyncFunctionMiddleware, loggerMiddleware } from "./middleware";

const initialState = {
  name: "Mustafo",
  surname: "Faiz",
  todos: [],
};

const reducer = (state = initialState, action) => {
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

const middlewareEnhancer = applyMiddleware(
  asyncFunctionMiddleware,
  loggerMiddleware
);

export const store = createStore(reducer, middlewareEnhancer);

import "./styles.css";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Todos } from "./components/Todos";

const addTodoAction = (description) => {
  return {
    type: "ADD_TODO",
    payload: [{ description }],
  };
};

export default function App() {
  const { name, surname } = useSelector((state) => state);

  const dispatch = useDispatch();
  const todoInput = useRef();

  const handleClick = (dispatch, getState) => {
    const {
      current: { value },
    } = todoInput;

    dispatch(addTodoAction(value));
  };

  return (
    <div className="App">
      <h1>
        Hello {name} {surname}
      </h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="todo-add-container">
        <input defaultValue="" ref={todoInput} />
        <button onClick={() => dispatch(handleClick)}>Add todo</button>
      </div>
      <Todos />
    </div>
  );
}

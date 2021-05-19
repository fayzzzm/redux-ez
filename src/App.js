import "./styles.css";

import { useRef } from "react";
import { useDispatch } from "react-redux";

import { Todos } from "./components/Todos";
import { Profile } from "./components/Profie";
import { User } from "./components/User";

const addTodoAction = (description) => {
  return {
    type: "add_todo",
    payload: { description },
  };
};

export default function App() {
  const dispatch = useDispatch();
  const todoInput = useRef();

  const handleClick = () => {
    const {
      current: { value },
    } = todoInput;

    dispatch(addTodoAction(value));
  };

  return (
    <div className="App">
      <Profile />
      <h2>Start editing to see some magic happen!</h2>
      <div className="todo-add-container">
        <input defaultValue="" ref={todoInput} />
        <button onClick={() => handleClick}>Add todo</button>
      </div>
      <Todos />
      <User />
    </div>
  );
}

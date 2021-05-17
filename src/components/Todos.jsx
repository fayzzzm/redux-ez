import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const Todos = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todos-container">
      {todos.map((todo, index) => (
        <TodoItem key={index} {...todo} index={index} />
      ))}
    </div>
  );
};

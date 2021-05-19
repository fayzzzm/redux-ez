import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const Todos = () => {
  const { list } = useSelector((state) => state.todos);

  return (
    <div className="todos-container">
      {list.map((todo, index) => (
        <TodoItem key={index} {...todo} index={index} />
      ))}
    </div>
  );
};

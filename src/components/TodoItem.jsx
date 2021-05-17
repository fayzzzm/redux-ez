export const TodoItem = (props) => {
  const { index, description } = props;

  return (
    <div
      className="todo-container"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
    >
      <div className="todo-container__top">{index} </div>
      <div className="todo-container__description">{description}</div>
    </div>
  );
};

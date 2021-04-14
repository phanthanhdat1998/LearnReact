import "../App.css";

const TodoItem = (props) => {
  const todo = props.todoProps;
  const todoItemStyle = {
    textDecoration: todo.complete ? "line-through" : "none",
  };
  return (
    <li style={todoItemStyle}>
      <input className="checkbox-todo" type="checkbox" name="" id="" />
      {todo.title}
      <input
        className="delete-todo"
        type="button"
        name=""
        id=""
        value="Delete"
      />
    </li>
  );
};

export default TodoItem;

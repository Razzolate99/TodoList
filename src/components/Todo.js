import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  // Text is the input text from the textbox
  // Todo is Singular TodoList item
  // Todos is the array or group of items all togehter
  // setTodos is how we modify Todos
  const deleteHandler = (e) => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = (e) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;

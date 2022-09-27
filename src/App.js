import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  //States
  const [inputText, setInputText] = useState(""); // being passed in the form
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
  const [todos, setTodos] = useState([]); //Array of objects

  useEffect(() => {
    filterHandler();
  }, [todos, status]); // Every Time a new item is added to Todos or status changes, run useEffect
  // Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true)); // show completed
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false)); //show uncompleted
        break;
      default: // show all
        setFilterTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      {/* Taking the state from line 7 and passing it into the form */}
      <TodoList setTodos={setTodos} todos={todos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;

import { React, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div>
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header />
          </div>
          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodo={setTodo}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          </div>
          <div>
            <TodoList
              todos={todos}
              setTodo={setTodo}
              setEditTodo={setEditTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

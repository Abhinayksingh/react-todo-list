import { findAllByAltText } from "@testing-library/react";
import React, { useEffect } from "react";
import "./Todo.css";

const TodoList = ({ todos, setTodo, setEditTodo }) => {
  const handleDeleteTodo = ({ id }) => {
    setTodo(todos.filter((todo) => todo.id != id));
  };
  const handleCompleteTodo = (todo) => {
    setTodo(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEditTodo = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  return (
    <div>
      <div className="todo-list__container">
        {todos.map((todo) => (
          <li className="todo-list" key={todo.id}>
            <input
              type="text"
              value={todo.title}
              className="list"
              onChange={(event) => event.preventDefault()}
            />

            <button
              className="button-complete task-button"
              onClick={() => handleCompleteTodo(todo)}
            >
              Complete
            </button>
            <button
              className="class-edit task-button"
              onClick={() => handleEditTodo(todo)}
            >
              Edit
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDeleteTodo(todo)}
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};
export default TodoList;

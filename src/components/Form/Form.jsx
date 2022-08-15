import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Form.css";

const Form = ({ input, setInput, todos, setTodo, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodo(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodo([...todos, { id: uuidv4(), title: input, conpleted: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} className="form">
        <input
          type="text"
          className="input-form"
          placeholder="Add list.."
          value={input}
          required
          onChange={onInputChange}
        />
        <button type="submit">{editTodo ? "Ok" : "Add"}</button>
      </form>
    </div>
  );
};
export default Form;

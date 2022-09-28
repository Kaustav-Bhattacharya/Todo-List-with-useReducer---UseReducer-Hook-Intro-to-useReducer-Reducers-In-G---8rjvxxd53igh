import React, { useState } from "react";

const AddTodo = ({ dispatch }) => {
  const [todo, setTodo] = useState("");
  return (
    <>
      <form
        id="todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add_todo", payload: { title: todo } });
          setTodo("");
        }}
      >
        <input
          id="todo-input"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export { AddTodo };

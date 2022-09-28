import React from "react";
const Todo = ({ id, value, dispatch }) => {
  return (
    <>
      <div className="todo-title">{value}</div>
      <button
        className="todo-delete"
        onClick={() => dispatch({ type: "delete_todo", payload: { id: id } })}
      >
        Delete
      </button>
    </>
  );
};

export { Todo };

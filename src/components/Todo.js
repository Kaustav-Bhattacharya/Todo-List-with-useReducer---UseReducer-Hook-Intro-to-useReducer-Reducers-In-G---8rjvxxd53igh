import React from "react";
const Todo = ({ id, value, dispatch }) => {
  return (
    <>
      <div className="todo-title">{value}   <button
        className="todo-delete"
        onClick={() => dispatch({ type: "delete_todo", payload: { id: id } })}
      >
        Delete
      </button></div>
   
    </>
  );
};

export { Todo };

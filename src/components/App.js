import React, { useReducer } from "react";
import { todoReducer } from "../reducers/todo";
import "../styles/App.css";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";
const App = () => {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <div id="main">
      <AddTodo dispatch={dispatch} />
      {state.map((task) => (
        <>
        <Todo
          className="todo"
          key={task.id}
          id={task.id}
          value={task.title}
          dispatch={dispatch}
        />
        <button
        className="todo-delete"
        onClick={() => dispatch({ type: "delete_todo", payload: { id: task.id } })}
      >
        Delete
      </button>
      </>
      ))}
    </div>
  );
};

export default App;

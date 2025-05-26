import React from "react";

export default function Todo({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h4>{todo.title}</h4>
          <h6>{todo.description}</h6>
          <button>{todo.done ? "Completed" : "Incomplete"}</button>
        </div>
      ))}
    </div>
  );
}

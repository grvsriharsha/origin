import React, { useContext } from "react";
import TodosContext from "../context";

export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext);
  var todos = state.todos;
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

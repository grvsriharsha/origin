import React, { useContext } from "react";
import TodosContext from "../context";

export default function TodoList() {
  const { state, count, setCount } = useContext(TodosContext);
  console.log("****************");
  console.log(state.todos);
  console.log("****************");

  var todos = state.todos;
  return (
    <div>
      count is {count}
      <ul>
        {todos.map((todo) => {
          <li key={todo.id}>
            <span>{todo.text}</span>
          </li>;
        })}
      </ul>
    </div>
  );
}

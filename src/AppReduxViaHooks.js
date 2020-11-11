import { useReducer } from "react";
import React from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE": {
      return {
        count: state.count + 1,
      };
    }
    case "DECREASE": {
      return {
        count: state.count - 1,
      };
    }
    case "RESET": {
      return {
        count: 0,
      };
    }
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      count is {state.count}
      <button
        className="border m-1 p-1"
        onClick={() => dispatch({ type: "INCREASE" })}
      >
        Increment
      </button>
      <button
        className="border m-1 p-1"
        onClick={() => dispatch({ type: "DECREASE" })}
      >
        Decrement
      </button>
      <button
        className="border m-1 p-1"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
}

export default App;

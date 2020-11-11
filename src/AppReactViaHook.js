import react, { useState, useContext } from "react";
import React, { useEffect, useRef } from "react";

import { UserContext } from "./index";

function AppReactViaHook() {
  const increment = function () {
    setCount(count + 1);
  };

  const decrement = function () {
    setCount(count - 1);
  };

  const reset = function () {
    setCount(0);
  };
  const [count, setCount] = useState(0);
  return (
    <div>
      count is {count}
      <button className="border m-1 p-1" onClick={increment}>
        Increment
      </button>
      <button className="border m-1 p-1" onClick={decrement}>
        Decrement
      </button>
      <button className="border m-1 p-1" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default AppReactViaHook;

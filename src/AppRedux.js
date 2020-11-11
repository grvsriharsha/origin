import react, { useState, useContext } from "react";
import React, { useEffect, useRef } from "react";
import { increaseCount, decreaseCount, resetCount } from "./redux/actions";
import { UserContext } from "./index";
import { withRouter } from "react-router";
import { connect } from "react-redux";

function AppRedux(props) {
  const increment = function () {
    props.dispatch(increaseCount());
  };

  const decrement = function () {
    props.dispatch(decreaseCount());
  };

  const reset = function () {
    props.dispatch(resetCount());
  };

  const [count, setCount] = useState(0);
  return (
    <div>
      count is {props.statObject}
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

function mapStateToProps(state) {
  return { statObject: state };
}

export default connect(mapStateToProps)(AppRedux);

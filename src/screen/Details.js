import React from "react";
import { Route, Router } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { increaseAge, decreaseAge } from "../redux/actions";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.increaseAge = this.increaseAge.bind(this);
    this.decreaseAge = this.decreaseAge.bind(this);
  }

  increaseAge() {
    this.props.dispatch(increaseAge());
  }

  decreaseAge() {
    this.props.dispatch(decreaseAge());
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>click here to increaseAge</h3>
        <button onClick={this.increaseAge}>+1</button>
        <h3>click here to DecreaseAge</h3>
        <button onClick={this.decreaseAge}>-1</button>
        <h1>Current age is: {this.props.statObject.age} </h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { statObject: state };
}

export default withRouter(connect(mapStateToProps)(Details));

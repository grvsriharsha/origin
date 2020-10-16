import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.increaseAge = this.props.increaseAge;
    this.decreseAge = this.props.decreseAge;
    this.age = this.props.age;
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={this.increaseAge}>increase</button>
        <button onClick={this.decreseAge}>decrease</button>

        {/* <Link to="/a">click here to  to first screen</Link>
                <Link to="/b">click here to  to second screen</Link> */}
      </div>
    );
  }
}

export default MainScreen;

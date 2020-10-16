import React from "react";
import logo from "./logo.svg";
import Screen1 from "./screen/Screen1";
import Screen2 from "./screen/Screen2";
import MainScreen from "./screen/MainScreen";
import { Route, Router } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Details from "./screen/Details";
import "./App.css";
import { decreaseAge } from "./redux/actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.increaseAge = this.increaseAge.bind(this);
    // this.decreseAge = this.decreseAge.bind(this);
  }

  //   increaseAge() {
  //     console.log("incraesing");
  //     this.setState({ age: this.state.age + 1 });
  //   }

  //   decreseAge() {
  //     // this.setState({age:this.state.age - 1});
  //     this.props.dispatch(decreaseAge());
  //   }

  render() {
    return (
      <div>
        <Details />
      </div>
    );
  }
}
export default App;

import React from "react";
import { Route, Router } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { setAge, setName } from "../redux/actions";

class Details extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { name: "", age: 0 };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.props.dispatch(setName());
    // this.setState({ name: event.target.value });
  }

  handleChangeAge(event) {
    this.props.dispatch(setAge());
    //this.setState({ age: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name={this.props.name}
            onChange={this.handleChangeName}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            name={this.props.age}
            onChange={this.handleChangeAge}
          />
        </label>
        <input type="submit" name="Submit" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { state: state };
}

export default withRouter(connect(mapStateToProps)(Details));

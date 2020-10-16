import React from "react";
import Details from "./screen/Details";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Details />
      </div>
    );
  }
}
export default App;

//Changes to be done while converting state to redux managemnt

//Firstly in index.html,declare provider,store and reducer
//1.Instaed of initaing state in constructor,the setstate takes place in reducer
//2.Instaed of setting state by using this.setState ,here we dispatch action
//3.It gets collected in Reducer and depending on reducer type caught in switch,we set the state
//4.While setting we need to create new state and set the values
//5.In the function ,which needs to use dispatch and whose properites are managed by state, maptoProps should be declared
//    and it should be connected to redux store
//

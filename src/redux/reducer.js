import firstdata from "../data/firstdata";
// const clone = require('lodash/clone');
// const cloneDeep = require('lodash/clonedeep');
import _ from "lodash";
const reducer = function manageDetails(
  state = { name: "ABC", age: 10 },
  action
) {
  switch (action.type) {
    case "SETNAME": {
      var newState = _.cloneDeep(state);
      newState.name = newState.name + "xxx";
      console.log("in set age ", newState);

      return newState;
    }
    case "SETAGE": {
      var newState = _.cloneDeep(state);
      newState.age = newState.age + 100;
      console.log("in set age ", newState);

      return newState;
    }
    default:
      return state;
  }
};

export default reducer;

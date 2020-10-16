// const clone = require('lodash/clone');
// const cloneDeep = require('lodash/clonedeep');
import _ from "lodash";
const reducer = function manageDetails(state = { age: 1 }, action) {
  switch (action.type) {
    case "INCREASE": {
      var newState = _.cloneDeep(state);
      newState.age = newState.age + 1;

      return newState;
    }
    case "DECREASE": {
      var newState = _.cloneDeep(state);
      newState.age = newState.age - 1;
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;

const postreducer = function count(state = 0, action) {
  switch (action.type) {
    case "INCREASE": {
      var newState = state + 1;
      return newState;
    }
    case "DECREASE": {
      var newState = state - 1;
      return newState;
    }
    case "RESET": {
      return 0;
    }
    default:
      return state;
  }
};

export default postreducer;

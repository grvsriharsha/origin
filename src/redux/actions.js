export function decreaseCount() {
  return {
    type: "DECREASE",
    index: 34, //some random
  };
}

export function increaseCount() {
  return {
    type: "INCREASE",
    index: 34, //some random
  };
}

export function resetCount() {
  return {
    type: "RESET",
    index: 34, //some random
  };
}

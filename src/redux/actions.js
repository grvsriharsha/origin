export function decreaseAge() {
  return {
    type: "DECREASE",
    index: 0,
  };
}

export function setName(name) {
  return {
    type: "SETNAME",
    name,
  };
}

export function setAge(age) {
  return {
    type: "SETAGE",
    age,
  };
}

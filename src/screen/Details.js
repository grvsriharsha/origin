import React, { useState } from "react";

const Details = function () {
  const [age, setAge] = useState(100);

  var increaseAge= function() {
    setAge(age + 1);
  }

  function decreaseAge() {
    setAge(age - 1);
  }

  return (
    <div>
      <h3>click here to increaseAge</h3>
      <button onClick={increaseAge}>+1</button>
      <h3>click here to DecreaseAge</h3>
      <button onClick={decreaseAge}>-1</button>
      <h1>Current age is: {age} </h1>
    </div>
  );
};

export default Details;

//Remeber Here we have Functions in functions

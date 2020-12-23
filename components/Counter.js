import React from "react";

function Counter({ number, onIncrease, onDecrease }) {
  console.log("dasd", number);
  return (
    <div>
      <h1>{number ? number : 0}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;

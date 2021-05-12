import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [click, setClickNumber] = useState(counter);
  const decrement = () => {
    setCounter(counter - 1);
    setClickNumber(click + 1);
  };
  const increment = () => {
    console.log("increment");
    setCounter(counter + 1);
    setClickNumber(click + 1);
  };
  const reset = () => {
    console.log("Reset");
    setCounter(0);
    setClickNumber(click + 1);

    // setClickNumber(0);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <h3>Counter App using Hooks</h3>
      <button onClick={() => decrement()}>-</button>{" "}
      <span>
        <strong>{counter}</strong>
      </span>{" "}
      <button onClick={() => increment()}>+</button>
      <button onClick={() => reset()}>
        <span>
          <strong>Reset</strong>
        </span>
      </button>
      <p>you clicked {click} no of times</p>
    </div>
  );
}

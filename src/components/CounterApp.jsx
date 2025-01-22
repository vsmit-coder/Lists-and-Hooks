import React, { useState } from "react";
import './CounterApp.css'

function CounterApp() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="count">{count}</div>
      <div className="buttons-container">
        <button onClick={incrementCount} className="increment">
          Increment
        </button>
        <button onClick={decrementCount} className="decrement">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterApp;

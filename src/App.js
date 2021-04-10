import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  const incrementCounter =()=>{
    if(error){
      setError(false)
      setCount(count+1)
    }else{
      setCount(count+1)
    }
  }
  return (
    <div data-test="component-app">
      {error ? (
        <span data-test="error-message">No count below zero</span>
      ) : (
        <h1 data-test="counter-display">
          The Counter is <span data-test="count">{count}</span>
        </h1>
      )}
      <button
        onClick={incrementCounter}
        data-test="increment-button"
      >
        Increment counter
      </button>
      <button
        disabled={error ? true : false}
        onClick={() =>
          count > 0 ? setCount(count - 1) :setError(true) 
        }
        data-test="decrement-button"
      >
        {" "}
        Decrement counter
      </button>
    </div>
  );
}

export default App;

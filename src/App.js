import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState();
  return (
    <div data-test="component-app">
      {error ? (
        <h1 data-test="error-message">{error}</h1>
      ) : (
        <h1 data-test="counter-display">
          The Counter is <span data-test="count">{count}</span>{" "}
        </h1>
      )}
      <button
        onClick={() => (error ? setError() : setCount(count + 1))}
        data-test="increment-button"
      >
        Increment counter
      </button>
      <button
        disabled={error ? true : false}
        onClick={() =>
          count === 0 ? setError("No count below zero") : setCount(count - 1)
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

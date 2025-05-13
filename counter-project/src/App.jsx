import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const incrementValue = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrementValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const resetValue = () => {
    setCount(0);
  };
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={incrementValue} disabled={count === 20}>
        Increase
      </button>
      <button onClick={decrementValue} disabled={count === 0}>
        Decrease
      </button>
      <button onClick={resetValue}>Reset</button>
    </>
  );
}

export default App;

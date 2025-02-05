import { useState } from "react";

function Counter() {
  // Step 1: Create a state variable to store the counter value
  const [count, setCount] = useState(0);

  // Step 2: Define functions to handle the increment and decrement
  const increment = () => {
    setCount(count + 1); // Increment the counter
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1); // Decrement the counter only if it's greater than 0
    }
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      {/* Step 3: Render the buttons */}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;

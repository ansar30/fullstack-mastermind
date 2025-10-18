/**
 * Basic Counter Component
 * Demonstrates: useState hook, event handling, basic component structure
 */

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h2>Counter Example</h2>
      <div className="count-display">
        <h1>{count}</h1>
      </div>
      <div className="button-group">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Counter;

// CSS (counter.css)
/*
.counter {
  text-align: center;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
}

.count-display {
  background: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.count-display h1 {
  font-size: 48px;
  margin: 0;
  color: #333;
}

.button-group {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.button-group button {
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #007bff;
  color: white;
  transition: background 0.3s;
}

.button-group button:hover {
  background: #0056b3;
}
*/


import React, { useState } from 'react';
import './Counter.css';

export default () => {
  const [ count, setCount ] = useState(0);
  const decrementCount = () => setCount(count < 1 ? 0 : count - 1);
  const incrementCount = () => setCount(count + 1);
  const resetCount = () => setCount(0);

  const backgroundColor = 'aqua';

  return (
    <div className="counter" style={{ backgroundColor }}>
      <h1>{count}</h1>
      <button onClick={decrementCount}>-</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

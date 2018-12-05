import React, { useState, useEffect } from 'react';
import './Counter.css';

export default () => {
  const [ count, setCount ] = useState(0);
  const decrementCount = () => setCount(count < 1 ? 0 : count - 1);
  const incrementCount = () => setCount(count + 1);
  const resetCount = () => setCount(0);

  const backgroundColors = ['aqua', 'orange', 'greenyellow', 'pink'];
  const newColor = () => backgroundColors[Math.round(Math.random() * (backgroundColors.length - 1))];
  const [ backgroundColor, setBackgroundColor ] = useState(newColor());

  const changeBackgroundColor = (e) => {
    e.preventDefault();
    setBackgroundColor(newColor());
  };

  const addColorListener = () =>
    window.addEventListener('click', changeBackgroundColor);
  const removeColorListener = () =>
    window.removeEventListener('click', changeBackgroundColor);

  useEffect(() => {
    addColorListener();
    return removeColorListener;
  });

  return (
    <div className="counter" style={{ backgroundColor }}>
      <h1>{count}</h1>
      <button onClick={decrementCount}>-</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};
import React, { useContext } from 'react';
import './Counter.css';
import CounterContext from './contexts/CounterContext';

const CounterWithContext = () => {
  const { state: { count, backgroundColor }, dispatch } = useContext(CounterContext);

  return (
    <div className="counter" style={{ backgroundColor }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
  );
};

export default CounterWithContext;
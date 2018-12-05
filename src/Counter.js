import React, { useReducer } from 'react';
import './Counter.css';
import counterReducer from './reducers/counter';

export default () => {
  const [ { count }, dispatch ] = useReducer(
    counterReducer,
    { count: 0 }
  );

  const backgroundColor = 'greenyellow';

  return (
    <div className="counter" style={{ backgroundColor }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
  );
};

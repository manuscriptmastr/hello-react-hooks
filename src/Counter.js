import React, { Component, useState, useReducer } from 'react';
import './Counter.css';
import counterReducer from './reducers/counter';

export class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  _setCount = (count) => this.setState({ count });

  decrementCount = () =>
    this._setCount(this.state.count < 1 ? 0 : this.state.count - 1);
  incrementCount = () =>
    this._setCount(this.state.count + 1);
  resetCount = () =>
    this._setCount(0);

  render() {
    const { count } = this.state;
    const { decrementCount, incrementCount, resetCount } = this;
    return (
      <div className="counter">
        <h1>{count}</h1>
        <button onClick={decrementCount}>-</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={incrementCount}>+</button>
      </div>
    );
  }
};

export const CounterWithState = () => {
  const [ count, setCount ] = useState(0);
  const decrementCount = () => setCount(count < 1 ? 0 : count - 1);
  const incrementCount = () => setCount(count + 1);
  const resetCount = () => setCount(0);

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={decrementCount}>-</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export const CounterWithReducer = () => {
  const [ { count }, dispatch ] = useReducer(
    counterReducer,
    { count: 0 }
  );

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
  );
};
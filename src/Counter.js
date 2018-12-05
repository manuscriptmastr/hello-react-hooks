import React, { Component, useState, useReducer, useEffect } from 'react';
import './Counter.css';
import counterReducer from './reducers/counter';

export class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.backgroundColor = 'orange';
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
    const { backgroundColor, decrementCount, incrementCount, resetCount } = this;
    return (
      <div className="counter" style={{ backgroundColor }}>
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

export const CounterWithReducer = () => {
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

export const CounterWithLifecycle = () => {
  const [ count, setCount ] = useState(0);
  const decrementCount = () => setCount(count < 1 ? 0 : count - 1);
  const incrementCount = () => setCount(count + 1);
  const resetCount = () => setCount(0);

  const backgroundColors = ['aqua', 'orange', 'greenyellow', 'pink'];
  const newColor = () => backgroundColors[Math.round(Math.random() * (backgroundColors.length - 1))];
  const [ backgroundColor, setBackgroundColor ] = useState(newColor());

  const changeBackgroundColor = (e) => {
    console.log('Clicked!');
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
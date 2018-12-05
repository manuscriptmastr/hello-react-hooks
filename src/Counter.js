import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
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
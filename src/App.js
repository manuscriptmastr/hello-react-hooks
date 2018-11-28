import React from 'react';
import './App.css';
import {
  CounterClass,
  CounterWithState,
  CounterWithReducer
} from './Counter';

const App = () =>
  <div className="app">
    <CounterClass />
    <CounterWithState />
    <CounterWithReducer />
  </div>

export default App;

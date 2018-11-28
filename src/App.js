import React from 'react';
import './App.css';
import {
  CounterClass,
  CounterWithState,
  CounterWithReducer,
  CounterWithLifecycle
} from './Counter';

const App = () =>
  <div className="app">
    <CounterClass />
    <CounterWithState />
    <CounterWithReducer />
    <CounterWithLifecycle />
  </div>

export default App;

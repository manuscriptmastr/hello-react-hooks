import React from 'react';
import './App.css';
import {
  CounterClass,
  CounterWithState,
  CounterWithReducer,
  CounterWithLifecycle,
  CounterWithContext
} from './Counter';

import CounterProvider from './contexts/CounterProvider';

const App = () =>
  <div className="app">
    <CounterClass />
    <CounterWithState />
    <CounterWithReducer />
    <CounterWithLifecycle />
    <CounterProvider>
      <CounterWithContext />
    </CounterProvider>
  </div>

export default App;

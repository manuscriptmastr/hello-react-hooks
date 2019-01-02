import React from 'react';
import './App.css';
import {
  CounterClass,
  CounterWithState,
  CounterWithReducer,
  CounterWithLifecycle,
  CounterWithContext
} from './Counter';

import CounterContext from './contexts/CounterContext';

const App = () =>
  <div className="app">
    <CounterClass />
    <CounterWithState />
    <CounterWithReducer />
    <CounterWithLifecycle />
    <CounterContext.Provider>
      <CounterWithContext />
    </CounterContext.Provider>
  </div>

export default App;

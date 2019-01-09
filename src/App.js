import React from 'react';
import './App.css';
import CounterWithContext from './Counter';
import CounterProvider from './contexts/CounterProvider';

const App = () =>
  <div className="app">
    <CounterProvider>
      <CounterWithContext />
      <CounterWithContext />
    </CounterProvider>
    <CounterProvider>
      <CounterWithContext />
    </CounterProvider>

  </div>

export default App;

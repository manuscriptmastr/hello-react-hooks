import React, { useReducer } from 'react';
import CounterContext from './contexts/CounterContext';

const CounterProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(
    reducer
  );
  return (
    <CounterContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
import React, { useReducer } from 'react';
import CounterContext from './CounterContext';
import reducer from '../reducers/counter';

const CounterProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(
    reducer,
    { count: 0, backgroundColor: 'orange' }
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
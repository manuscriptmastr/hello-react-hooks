import { createContext } from 'react';

const CounterContext = createContext({ count: 0, backgroundColor: 'orange' });

export default CounterContext;
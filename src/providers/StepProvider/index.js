import React, { createContext, useReducer } from 'react';
import initState from './init-state';
import reducer from './reducer';

export const StepContext = createContext(null);

const StepProvider = ({ children }) => {
  const [variablesState, dispatch] = useReducer(reducer, initState);

  return (
    <StepContext.Provider value={{ variablesState, dispatch }}>
      {children}
    </StepContext.Provider>
  );
};

export default StepProvider;

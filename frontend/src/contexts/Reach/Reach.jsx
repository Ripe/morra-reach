import React, { createContext, useContext, useEffect, useRef } from 'react';
import { loadStdlib, ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

const ReachContext = createContext({
  standardToAtomic: () => {},
  atomicToStandard: () => {},
});

export const Reach = ({ children }) => {
  const stdlib = useRef(loadStdlib('ALGO'));

  useEffect(() => {
    stdlib.current.setWalletFallback(
      stdlib.current.walletFallback({
        providerEnv: 'TestNet',
        MyAlgoConnect,
      }),
    );
  }, []);

  return (
    <ReachContext.Provider
      value={{
        ...stdlib.current,
        standardToAtomic: stdlib.current.parseCurrency,
        atomicToStandard: amount => stdlib.current.formatCurrency(amount, 4),
      }}
    >
      {children}
    </ReachContext.Provider>
  );
};

export const useReach = () => useContext(ReachContext);

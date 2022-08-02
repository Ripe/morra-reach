import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { loadStdlib, ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { useSearchParams } from 'react-router-dom';

const ReachContext = createContext({
  standardToAtomic: () => {},
  atomicToStandard: () => {},
});

export const Reach = ({ children }) => {
  const stdlib = useRef();
  const [isReady, setIsReady] = useState(false);
  const [searchParams] = useSearchParams();
  const chain = searchParams.get('chain') || localStorage.getItem('chain') || 'ALGO';
  const env = searchParams.get('env') || localStorage.getItem('env') || 'TestNet';

  useEffect(() => {
    localStorage.setItem('chain', chain);
    localStorage.setItem('env', env);

    stdlib.current = loadStdlib(chain);

    stdlib.current.setWalletFallback(
      stdlib.current.walletFallback({
        providerEnv: env,
        MyAlgoConnect,
      }),
    );

    setIsReady(true);
  }, [chain, env]);

  if (!isReady) {
    return null;
  }

  return (
    <ReachContext.Provider
      value={{
        ...stdlib.current,
        chain,
        env,
        standardToAtomic: stdlib.current.parseCurrency,
        atomicToStandard: amount => stdlib.current.formatCurrency(amount, 4),
      }}
    >
      {children}
    </ReachContext.Provider>
  );
};

export const useReach = () => useContext(ReachContext);

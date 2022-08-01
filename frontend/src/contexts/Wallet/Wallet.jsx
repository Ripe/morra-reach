import React, { createContext, useRef, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useReach } from '../Reach';

const WalletContext = createContext({
  isConnected: false,
  account: null,
  balance: 0,
  connect: () => {},
  disconnect: () => {},
});

export const Wallet = ({ children }) => {
  const reach = useReach();
  const account = useRef(null);
  const [balance, setBalance] = useState(0);

  const fetchBalance = async () => {
    if (!account.current) {
      return;
    }

    const atomicBalance = await reach.balanceOf(account.current);
    const balance = reach.formatCurrency(atomicBalance, 4);

    setBalance(balance);
  };

  const connect = async () => {
    account.current = await reach.getDefaultAccount();
    // account.current = await reach.newTestAccount(reach.standardToAtomic(20));

    await fetchBalance();
  };

  const disconnect = () => {
    setBalance(0);
    account.current = null;
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected: Boolean(account.current),
        account: account.current,
        balance,
        connect,
        disconnect,
        fetchBalance,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);

export const useRequireWallet = () => {
  const wallet = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (!wallet.isConnected) {
      navigate('/');
    }
  }, [wallet.isConnected]);

  return null;
};

import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as backend from 'backend';
import { Header } from './components';
import { useReach, useWallet } from './contexts';
import { Deployer, Attacher, Share, AcceptedWager, Outcome, Timeout } from './routes';
import * as Styled from './App.styles';

export const App = () => {
  const navigate = useNavigate();
  const wallet = useWallet();
  const reach = useReach();

  const shared = {
    ...reach.hasRandom,
    onResult: (myChoice, theirChoice, payout) => {
      navigate('/outcome', {
        state: {
          myChoice,
          theirChoice,
          payout: reach.atomicToStandard(payout),
        },
      });
    },
    onTimeout: () => {
      navigate('/timeout');
    },
  };

  const handleInitDeployer = async (params, onContractInfo = () => {}) => {
    const contract = wallet.account.contract(backend);

    contract.getInfo().then(onContractInfo);

    return backend.Deployer(contract, {
      ...shared,
      ...params,
    });
  };

  const handleInitAttacher = async (params, contractInfo) => {
    const contract = wallet.account.contract(backend, contractInfo);

    return backend.Attacher(contract, {
      ...shared,
      ...params,
    });
  };

  return (
    <>
      <Styled.Container>
        <Header />
        <Styled.Content>
          <Routes>
            <Route path="/share" element={<Share />} />
            <Route path="/accepted-wager" element={<AcceptedWager />} />
            <Route path="/outcome" element={<Outcome />} />
            <Route path="/timeout" element={<Timeout />} />
            <Route path="/:contract" element={<Attacher onInitContract={handleInitAttacher} />} />
            <Route path="/" element={<Deployer onInitContract={handleInitDeployer} />} />
          </Routes>
        </Styled.Content>
      </Styled.Container>
      <Styled.Footer>Made for Ascent Bootcamp</Styled.Footer>
    </>
  );
};

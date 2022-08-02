import React, { useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as backend from 'backend';
import { Header, Choice } from './components';
import { useReach, useWallet } from './contexts';
import { Deployer, Attacher, Pending, Outcome, Timeout } from './routes';
import * as Styled from './App.styles';

export const App = () => {
  const navigate = useNavigate();
  const wallet = useWallet();
  const reach = useReach();
  const choiceRef = useRef();

  const shared = {
    ...reach.hasRandom,
    getChoice: async round => choiceRef.current.getChoice(reach.bigNumberToNumber(round)),
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
          <Choice ref={choiceRef}>
            <Routes>
              <Route path="/pending" element={<Pending />} />
              <Route path="/outcome" element={<Outcome />} />
              <Route path="/timeout" element={<Timeout />} />
              <Route path="/:contract" element={<Attacher onInitContract={handleInitAttacher} />} />
              <Route path="/" element={<Deployer onInitContract={handleInitDeployer} />} />
            </Routes>
          </Choice>
        </Styled.Content>
      </Styled.Container>
      <Styled.Footer>
        <p>Made for Ascent Bootcamp</p>
        <p>
          <Styled.Link href={`/?chain=ALGO&env=${reach.env}`} $isActive={reach.chain === 'ALGO'}>
            ALGO
          </Styled.Link>{' '}
          <Styled.Link href={`/?chain=ETH&env=${reach.env}`} $isActive={reach.chain === 'ETH'}>
            ETH
          </Styled.Link>
        </p>
        <p>
          <Styled.Link
            href={`/?chain=${reach.chain}&env=TestNet`}
            $isActive={reach.env === 'TestNet'}
          >
            TestNet
          </Styled.Link>{' '}
          <Styled.Link
            href={`/?chain=${reach.chain}&env=LocalHost`}
            $isActive={reach.env === 'LocalHost'}
          >
            DevNet
          </Styled.Link>
        </p>
      </Styled.Footer>
    </>
  );
};

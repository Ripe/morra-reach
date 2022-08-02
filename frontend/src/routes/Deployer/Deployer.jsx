import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Loading } from '../../components';
import { useReach, useWallet } from '../../contexts';

const DEFAULT_DEADLINE = {
  ALGO: 30,
  ETH: 12,
};

export const Deployer = ({ onInitContract }) => {
  const navigate = useNavigate();
  const reach = useReach();
  const wallet = useWallet();
  const [wager, setWager] = useState(1);
  const [deadline, setDeadline] = useState(DEFAULT_DEADLINE[reach.chain]);
  const [maxRounds, setMaxRounds] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async e => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await onInitContract(
        {
          wager: reach.standardToAtomic(wager),
          deadline,
          maxRounds,
        },
        async contractInfo => {
          const url = [
            location.protocol,
            '//',
            location.host,
            location.pathname,
            contractInfo && window.btoa(JSON.stringify(contractInfo)),
            `?chain=${reach.chain}&env=${reach.env}`,
          ]
            .filter(Boolean)
            .join('');

          prompt('Share this URL with your opponent', url);

          navigate('/pending');
        },
      );
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Input
        type="number"
        min="0"
        max={wallet.balance}
        label={`Wager (${reach.standardUnit})`}
        name="wager"
        value={wager}
        onChange={e => setWager(Number(e.target.value))}
      />
      <Input
        type="number"
        min="0"
        label={`Deadline (~${reach.getBlocksToSeconds(deadline)}s before timeout)`}
        name="deadline"
        value={deadline}
        onChange={e => setDeadline(Number(e.target.value))}
      />
      <Input
        type="number"
        min="0"
        label="Maximum rounds before draw"
        name="maxRounds"
        value={maxRounds}
        onChange={e => setMaxRounds(Number(e.target.value))}
      />
      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <Button onClick={handleClick} type="button" disabled={!wallet.isConnected}>
          Deploy
        </Button>
      )}
    </>
  );
};

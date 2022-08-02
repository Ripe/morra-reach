import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../../components';
import { DEADLINE, MAX_ROUNDS } from '../../constants';
import { useReach, useWallet } from '../../contexts';

export const Deployer = ({ onInitContract }) => {
  const navigate = useNavigate();
  const reach = useReach();
  const wallet = useWallet();
  const [wager, setWager] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async e => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await onInitContract(
        {
          wager: reach.standardToAtomic(wager),
          deadline: DEADLINE,
          maxRounds: MAX_ROUNDS,
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
      <Button onClick={handleClick} type="button" disabled={!wallet.isConnected || isLoading}>
        {isLoading ? 'Loading...' : 'Deploy'}
      </Button>
    </>
  );
};

import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Choice } from '../../components';
import { useReach, useWallet } from '../../contexts';
import * as Styled from './Deployer.styles';

export const Deployer = ({ onInitContract }) => {
  const navigate = useNavigate();
  const reach = useReach();
  const wallet = useWallet();
  const choiceRef = useRef();
  const [wager, setWager] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await onInitContract(
        {
          choice: choiceRef.current.getChoice(),
          wager: reach.standardToAtomic(wager),
          deadline: 30,
        },
        contractInfo => {
          navigate('/share', {
            state: {
              contract: window.btoa(JSON.stringify(contractInfo)),
            },
          });
        },
      );
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Choice ref={choiceRef} />
      <Input
        type="number"
        min="0"
        max={wallet.balance}
        label={`Wager (${reach.standardUnit})`}
        name="wager"
        value={wager}
        onChange={e => setWager(Number(e.target.value))}
      />
      <Styled.Actions>
        <Button type="submit" disabled={!wallet.isConnected || isLoading}>
          Play
        </Button>
      </Styled.Actions>
    </Styled.Form>
  );
};

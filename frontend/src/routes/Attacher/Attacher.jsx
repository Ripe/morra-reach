import React, { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Button, Choice } from '../../components';
import { useReach, useWallet } from '../../contexts';
import * as Styled from './Attacher.styles';

export const Attacher = ({ onInitContract }) => {
  const navigate = useNavigate();
  const reach = useReach();
  const wallet = useWallet();
  const choiceRef = useRef();
  const { contract } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    const contractInfo = contract && JSON.parse(window.atob(contract));

    setIsLoading(true);

    try {
      await onInitContract(
        {
          choice: choiceRef.current.getChoice(),
          acceptWager: wager => {
            navigate('/accepted-wager', {
              state: {
                wager: reach.atomicToStandard(wager),
              },
            });
          },
        },
        contractInfo,
      );
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  };

  if (!contract) {
    return <Redirect to="/" />;
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Choice ref={choiceRef} />
      <Styled.Actions>
        <Button type="submit" disabled={!wallet.isConnected || isLoading}>
          Play
        </Button>
      </Styled.Actions>
    </Styled.Form>
  );
};

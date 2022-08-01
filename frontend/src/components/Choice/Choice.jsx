import React, { useImperativeHandle, forwardRef, useState } from 'react';
import { HandIcon } from '../HandIcon';
import { Button } from '../Button';
import { GUESSES, MAX_ROUNDS } from '../../constants';
import { useWallet } from '../../contexts';
import * as Styled from './Choice.styles';

const possibleFingers = [0, 1, 2, 3, 4, 5];

export const Choice = forwardRef(({ children }, ref) => {
  const wallet = useWallet();
  const [hand, setHand] = useState(0);
  const [opponentHand, setOpponentHand] = useState(0);
  const [round, setRound] = useState(0);
  const [submit, setSubmitHandler] = useState(null);
  const guess = hand + opponentHand;

  useImperativeHandle(ref, () => ({
    getChoice: currentRound => {
      setRound(currentRound);

      return new Promise(resolve => {
        setSubmitHandler(() => choice => {
          resolve(choice);
          setSubmitHandler(null);
        });
      });
    },
  }));

  if (!submit || !wallet.isConnected) {
    return children;
  }

  return (
    <>
      {round > 0 && (
        <Styled.Message>
          Draw! Try again!
          <br />
          <small>{MAX_ROUNDS - round} attempts left.</small>
        </Styled.Message>
      )}
      <Styled.Label>
        Your hand ({hand} finger{hand !== 1 ? 's' : ''})
      </Styled.Label>
      <Styled.Hands>
        {possibleFingers.map(fingers => (
          <Styled.Hand key={fingers}>
            <input
              type="radio"
              value={fingers}
              checked={fingers === hand}
              onChange={e => {
                const value = Number(e.target.value);

                setHand(value);
              }}
            />
            <HandIcon fingers={fingers} />
          </Styled.Hand>
        ))}
      </Styled.Hands>
      <Styled.Label>
        Your opponent's hand ({opponentHand} finger{opponentHand !== 1 ? 's' : ''})
      </Styled.Label>
      <Styled.Hands>
        {possibleFingers.map(fingers => (
          <Styled.Hand key={fingers}>
            <input
              type="radio"
              value={fingers}
              checked={fingers === opponentHand}
              onChange={e => {
                const value = Number(e.target.value);

                setOpponentHand(value);
              }}
            />
            <HandIcon $isFlipped fingers={fingers} />
          </Styled.Hand>
        ))}
      </Styled.Hands>
      <Button onClick={() => submit([hand, guess])}>I guess {GUESSES[guess]}!</Button>
    </>
  );
});

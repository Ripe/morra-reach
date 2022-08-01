import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { HandIcon, Button } from '../../components';
import { useWallet, useReach, useRequireWallet } from '../../contexts';
import { GUESSES } from '../../constants';
import * as Styled from './Outcome.styles';

export const Outcome = () => {
  const reach = useReach();
  const wallet = useWallet();
  const { state } = useLocation();
  const navigate = useNavigate();

  const myFingers = reach.bigNumberToNumber(state.myChoice[0]);
  const theirFingers = reach.bigNumberToNumber(state.theirChoice[0]);
  const myGuess = reach.bigNumberToNumber(state.myChoice[1]);
  const theirGuess = reach.bigNumberToNumber(state.theirChoice[1]);

  const winningGuess = myFingers + theirFingers;
  const isWin = myGuess === winningGuess;
  const theyWin = theirGuess === winningGuess;
  const isDraw = (isWin && theyWin) || (!isWin && !theyWin);

  useEffect(() => {
    wallet.fetchBalance();
  }, []);

  useRequireWallet();

  return (
    <>
      <Styled.Result>
        <Styled.Choice>
          <Styled.Guess>
            {GUESSES[myGuess]}
            <em>!!</em>
          </Styled.Guess>
          <HandIcon fingers={myFingers} />
          <Styled.Name>You</Styled.Name>
        </Styled.Choice>
        <Styled.Message>
          <Styled.Outcome>{isDraw ? 'Draw' : isWin ? 'Win' : 'Lose'}</Styled.Outcome>
          <Styled.Summary>
            The correct guess was <strong>{GUESSES[winningGuess].toLowerCase()}</strong>.
            {state.payout > 0 && ` You received ${state.payout} ${reach.standardUnit}!`}
          </Styled.Summary>
        </Styled.Message>
        <Styled.Choice>
          <Styled.Guess $isFlipped>
            {GUESSES[theirGuess]}
            <em>!!</em>
          </Styled.Guess>
          <HandIcon fingers={theirFingers} isFlipped />
          <Styled.Name>Opponent</Styled.Name>
        </Styled.Choice>
      </Styled.Result>
      <Button onClick={() => navigate('/')}>Play again?</Button>
    </>
  );
};

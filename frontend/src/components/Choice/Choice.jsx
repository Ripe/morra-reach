import React, { useImperativeHandle, forwardRef, useState } from 'react';
import { HandIcon } from '../HandIcon';
import { Input } from '../Input';
import * as Styled from './Choice.styles';

const numFingers = 5;
const possibleFingers = Array.from(Array(numFingers + 1).keys());
const getMaxGuess = hand => numFingers * 2 - (numFingers - hand);

export const Choice = forwardRef((props, ref) => {
  const [hand, setHand] = useState(0);
  const [guess, setGuess] = useState(0);

  useImperativeHandle(ref, () => ({
    getChoice: () => [hand, guess],
  }));

  return (
    <>
      <Styled.Root {...props}>
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
                name="hand"
                onChange={e => {
                  const value = Number(e.target.value);

                  setHand(value);
                  setGuess(Math.min(getMaxGuess(value), Math.max(value, guess)));
                }}
              />
              <HandIcon fingers={fingers} />
            </Styled.Hand>
          ))}
        </Styled.Hands>
      </Styled.Root>
      <Input
        type="range"
        min={hand}
        max={getMaxGuess(hand)}
        label={`Your guess (${guess} finger${guess !== 1 ? 's' : ''})`}
        name="guess"
        value={guess}
        onChange={e => setGuess(Number(e.target.value))}
      />
    </>
  );
});

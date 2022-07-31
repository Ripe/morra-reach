import React from 'react';
import { useLocation } from 'react-router';
import { useReach, useRequireWallet } from '../../contexts';
import { Loading } from '../../components';

export const AcceptedWager = () => {
  const reach = useReach();
  const { state } = useLocation();

  useRequireWallet();

  return (
    <>
      <p>
        You've accepted a wager of {state.wager} {reach.standardUnit}.
      </p>
      <Loading>Waiting for result...</Loading>
    </>
  );
};

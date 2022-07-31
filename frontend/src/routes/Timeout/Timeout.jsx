import React from 'react';
import { useRequireWallet } from '../../contexts';

export const Timeout = () => {
  useRequireWallet();

  return <p>Your game timed out.</p>;
};

import React from 'react';
import { Loading } from '../../components';
import { useRequireWallet } from '../../contexts';

export const Pending = () => {
  useRequireWallet();

  return <Loading>Waiting...</Loading>;
};

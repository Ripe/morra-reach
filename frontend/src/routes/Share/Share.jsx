import React from 'react';
import { useLocation } from 'react-router-dom';
import { Loading } from '../../components';
import { useRequireWallet } from '../../contexts';

export const Share = () => {
  const { state } = useLocation();
  const url = `${window.location.origin}/#/${state.contract}`;

  useRequireWallet();

  return (
    <>
      <p>Share URL with opponent:</p>
      <p>
        <a href={url} target="_blank">
          {url}
        </a>
      </p>
      <Loading>Waiting for payment and opponent...</Loading>
    </>
  );
};

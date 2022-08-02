import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Button } from '../../components';
import { useReach, useWallet } from '../../contexts';

export const Attacher = ({ onInitContract }) => {
  const navigate = useNavigate();
  const reach = useReach();
  const wallet = useWallet();
  const { contract } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const contractInfo = contract && JSON.parse(window.atob(contract));

  const handleClick = async e => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await onInitContract(
        {
          acceptWager: () => {
            navigate('/pending');
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
    <>
      <p>Are you sure you want to attach to #{reach.bigNumberToNumber(contractInfo)}?</p>
      <Button type="button" onClick={handleClick} disabled={!wallet.isConnected || isLoading}>
        {isLoading ? 'Loading...' : 'Confirm'}
      </Button>
    </>
  );
};

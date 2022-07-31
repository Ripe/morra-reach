import React from 'react';
import { NavLink } from 'react-router-dom';
import { useWallet, useReach } from '../../contexts';
import { Button } from '../Button';
import { Logo } from '../Logo';
import * as Styled from './Header.styles';

export const Header = ({ children, ...rest }) => {
  const reach = useReach();
  const wallet = useWallet();

  let account = (
    <Styled.Account>
      <Button onClick={wallet.connect}>Connect</Button>
    </Styled.Account>
  );

  if (wallet.isConnected) {
    const address = wallet.account.networkAccount.addr;

    account = (
      <Styled.Account>
        <Styled.Balance title={address}>
          {wallet.balance} {reach.standardUnit}
        </Styled.Balance>
        <Button onClick={wallet.disconnect}>Disconnect</Button>
      </Styled.Account>
    );
  }

  return (
    <Styled.Root {...rest}>
      <Styled.Wrapper>
        <NavLink to="/">
          <Logo />
        </NavLink>
        {account}
      </Styled.Wrapper>
    </Styled.Root>
  );
};
